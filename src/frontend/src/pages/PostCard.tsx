import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";

export default function PostCard({ postId: propPostId }: { postId?: number }) {
  const params = useParams<{ postId: string }>();
  const postId = propPostId ?? (params.postId ? Number(params.postId) : null);
  const navigate = useNavigate();
  const [postData, setPostData] = useState<FeedPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      if (postId === null || postId === undefined) {
        setError("Invalid post ID");
        setLoading(false);
        return;
      }
      try {
        const feed = await backendService.getFeed(20, 0);
        const found = feed.find((item) => item.post.id === postId);
        if (!found) {
          setError("Post not found");
        } else {
          setPostData(found);
          const postComments = await backendService.getComments(postId);
          setComments(postComments);
          // Check if user liked the post (this requires user info, skipped for now)
          setIsLiked(false);
        }
      } catch (err) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleString();

  const handleLike = async () => {
    if (!postData) return;
    setIsLiking(true);
    try {
      if (isLiked) {
        await backendService.unlikePost(postData.post.id);
        setPostData({
          ...postData,
          post: { ...postData.post, likes: postData.post.likes - 1 },
        });
        setIsLiked(false);
      } else {
        await backendService.likePost(postData.post.id);
        setPostData({
          ...postData,
          post: { ...postData.post, likes: postData.post.likes + 1 },
        });
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Failed to update like status", error);
    } finally {
      setIsLiking(false);
    }
  };

  const handleAddComment = async () => {
    if (!postData || newComment.trim() === "") return;
    try {
      const result = await backendService.addComment(
        postData.post.id,
        newComment,
      );
      if ("#ok" in result) {
        const comment = result["#ok"];
        setComments([...comments, comment]);
        setPostData({
          ...postData,
          post: { ...postData.post, comments: postData.post.comments + 1 },
        });
        setNewComment("");
      } else if ("#err" in result) {
        alert(result["#err"]);
      }
    } catch (error) {
      console.error("Failed to add comment", error);
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error || !postData) {
    return (
      <div className="p-4 text-center">
        <p>{error || "Post not found."}</p>
        <button
          className="bg-primary mt-4 rounded px-4 py-2 text-white"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const { post, author } = postData;

  return (
    <div className="card dark:bg-charcoal-black mx-auto w-full max-w-2xl bg-white p-4">
      {/* Header: Author Info */}
      <div className="mb-4 flex items-center gap-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={`${author.username}'s avatar`}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="bg-primary font-heading flex h-10 w-10 items-center justify-center rounded-full text-lg text-white">
            {author.username[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="font-heading text-deep-indigo dark:text-light text-lg font-semibold">
            {author.username}
          </h3>
          <span className="text-sm text-gray-400">
            {formatDate(post.createdAt)}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-dark dark:text-light font-body mb-4 text-base break-words whitespace-pre-wrap">
        {post.content}
      </p>

      {/* Post Actions */}
      <div className="flex items-center gap-6 text-sm">
        <button
          className="text-accent flex items-center gap-1 font-medium hover:underline disabled:opacity-50"
          onClick={handleLike}
          disabled={isLiking}
        >
          <span role="img" aria-label="like">
            {isLiked ? "💖" : "👍"}
          </span>{" "}
          {post.likes}
        </button>
        <button className="text-secondary flex items-center gap-1 font-medium hover:underline">
          <span role="img" aria-label="comments">
            💬
          </span>{" "}
          {post.comments}
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h4 className="font-heading mb-2 text-lg">Comments</h4>
        <div className="space-y-4">
          {comments.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No comments yet.</p>
          )}
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded border border-gray-300 p-3 dark:border-gray-600"
            >
              <p className="font-body text-sm">{comment.content}</p>
              <div className="mt-1 text-xs text-gray-400">
                By {comment.authorId} on {formatDate(comment.createdAt)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <textarea
            className="flex-1 rounded border border-gray-300 bg-white p-2 text-sm text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-100 dark:text-gray-900"
            rows={2}
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-white disabled:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              handleAddComment();
            }}
            disabled={newComment.trim() === ""}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

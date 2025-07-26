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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

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
        // If new comment added on last page, move to last page
        const totalPages = Math.ceil((comments.length + 1) / commentsPerPage);
        setCurrentPage(totalPages);
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
          className="bg-primary mt-4 rounded px-4 py-2 text-white hover:bg-primary-dark transition"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const { post, author } = postData;

  // Pagination calculations
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  return (
    <div className="card mx-auto w-full max-w-2xl bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
      {/* Header: Author Info */}
      <div className="mb-6 flex items-center gap-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={`${author.username}'s avatar`}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="bg-primary font-heading flex h-12 w-12 items-center justify-center rounded-full text-xl text-white">
            {author.username[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="font-heading text-deep-indigo text-xl font-semibold">
            {author.username}
          </h3>
          <span className="text-sm text-gray-500">
            {formatDate(post.createdAt)}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-900 font-body mb-6 text-base break-words whitespace-pre-wrap leading-relaxed">
        {post.content}
      </p>

      {/* Post Actions */}
      <div className="flex items-center gap-8 text-sm">
        <button
          className="text-accent flex items-center gap-2 font-medium hover:underline disabled:opacity-50 transition-colors"
          onClick={handleLike}
          disabled={isLiking}
        >
          <span role="img" aria-label="like" className="text-lg">
            {isLiked ? "💖" : "👍"}
          </span>
          {post.likes}
        </button>
        <button className="text-secondary flex items-center gap-2 font-medium hover:underline transition-colors">
          <span role="img" aria-label="comments" className="text-lg">
            💬
          </span>
          {post.comments}
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-8 max-h-[320px] overflow-y-auto">
        <h4 className="font-heading mb-4 text-lg">Comments</h4>
        <div className="space-y-5">
          {currentComments.length === 0 && (
            <p className="text-gray-500">No comments yet.</p>
          )}
          {currentComments.map((comment) => (
            <div
              key={comment.id}
              className="rounded border border-gray-300 p-4 shadow-sm"
            >
              <p className="font-body text-sm text-gray-800">{comment.content}</p>
              <div className="mt-2 text-xs text-gray-400">
                By {comment.authorId} on {formatDate(comment.createdAt)}
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-3">
            <button
              className="rounded border border-gray-300 px-4 py-1 text-sm font-medium disabled:opacity-50 hover:bg-gray-100 transition"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="flex items-center px-3 text-sm font-medium text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="rounded border border-gray-300 px-4 py-1 text-sm font-medium disabled:opacity-50 hover:bg-gray-100 transition"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <textarea
          className="flex-1 rounded border border-gray-300 bg-white p-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-white font-semibold disabled:opacity-50 transition w-full sm:w-auto text-sm"
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
  );
}

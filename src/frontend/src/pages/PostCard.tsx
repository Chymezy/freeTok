import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";

export default function PostCard() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<FeedPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!postId) {
        setError("Invalid post ID");
        setLoading(false);
        return;
      }
      try {
        const feed = await backendService.getFeed(20, 0);
        const found = feed.find((item) => item.post.id === Number(postId));
        if (!found) {
          setError("Post not found");
        } else {
          setPostData(found);
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

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error || !postData) {
    return (
      <div className="p-4 text-center">
        <p>{error || "Post not found."}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const { post, author } = postData;

  return (
    <div className="card dark:bg-charcoal-black bg-white w-full max-w-2xl mx-auto p-4">
      {/* Header: Author Info */}
      <div className="flex items-center gap-4 mb-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={`${author.username}'s avatar`}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="bg-primary text-white h-10 w-10 flex items-center justify-center rounded-full font-heading text-lg">
            {author.username[0]?.toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="font-heading text-lg text-deep-indigo font-semibold dark:text-light">
            {author.username}
          </h3>
          <span className="text-sm text-gray-400">{formatDate(post.createdAt)}</span>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-dark dark:text-light font-body text-base mb-4 whitespace-pre-wrap break-words">
        {post.content}
      </p>

      {/* Post Actions */}
      <div className="flex items-center gap-6 text-sm">
        <button className="flex items-center gap-1 text-accent hover:underline font-medium">
          <span role="img" aria-label="like">👍</span> {post.likes}
        </button>
        <button className="flex items-center gap-1 text-secondary hover:underline font-medium">
          <span role="img" aria-label="comments">💬</span> {post.comments}
        </button>
      </div>
    </div>
  );
}

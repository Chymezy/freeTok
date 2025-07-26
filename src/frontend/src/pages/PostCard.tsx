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
        <button className="text-accent flex items-center gap-1 font-medium hover:underline">
          <span role="img" aria-label="like">
            👍
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
    </div>
  );
}

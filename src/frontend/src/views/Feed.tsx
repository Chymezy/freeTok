import { useEffect, useState } from "react";
import { getFeed, FeedPost } from "../services/canister";
import PostCard from "../components/PostCard";

export default function Feed() {
  const [feed, setFeed] = useState<FeedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFeed()
      .then((data) => {
        setFeed(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load feed");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading feed...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="flex flex-col gap-6">
      {feed.map((item) => (
        <PostCard key={item.post.id} post={item.post} author={item.author} />
      ))}
    </div>
  );
} 
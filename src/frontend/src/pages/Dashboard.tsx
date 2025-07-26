import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";

export default function Dashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<FeedPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await backendService.getFeed(20, 0);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  return (
    <DashboardLayout>
      <h1 className="font-heading mb-6 text-3xl">Welcome to FreeTok 🎉</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="card">🔥 Trending Topics</div>
        <div className="card">💰 Monetization Stats</div>
        <div className="card">📊 Creator Analytics</div>
        <div className="card">📝 Latest Posts</div>
        <div className="card">📈 Feed Insights</div>
        <div className="card">🚀 Explore Opportunities</div>
      </div>

      <h2 className="mt-8 mb-4 font-heading text-2xl">Posts</h2>
      <div className="space-y-4">
        {posts.map(({ post }) => (
          <div
            key={post.id}
            className="card cursor-pointer p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => handlePostClick(post.id)}
          >
            <p className="font-body text-base line-clamp-3">{post.content}</p>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Likes: {post.likes} | Comments: {post.comments}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";

export default function Dashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<FeedPost[]>([]);

  async function fetchPosts() {
    try {
      const fetchedPosts = await backendService.getFeed(20, 0);
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Refetch posts when navigating back to dashboard
  useEffect(() => {
    const handleFocus = () => {
      fetchPosts();
    };
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  return (
    <>
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="font-heading text-center text-3xl sm:text-left">Welcome to deCentra 🎉</h1>
        <button
          onClick={() => navigate("/dashboard/post")}
          className="w-full rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary-dark sm:w-auto"
        >
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="card">🔥 Trending Topics</div>
        <div className="card">💰 Monetization Stats</div>
        <div className="card">📊 Creator Analytics</div>
        <div className="card">📝 Latest Posts</div>
        <div className="card">📈 Feed Insights</div>
        <div className="card">🚀 Explore Opportunities</div>
      </div>

      <h2 className="font-heading mt-8 mb-4 text-2xl">Posts</h2>
      <div className="space-y-4">
        {posts.map(({ post }) => (
          <div
            key={post.id}
            className="card cursor-pointer p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => handlePostClick(post.id)}
          >
            <p className="font-body line-clamp-3 text-base">{post.content}</p>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Likes: {post.likes} | Comments: {post.comments}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

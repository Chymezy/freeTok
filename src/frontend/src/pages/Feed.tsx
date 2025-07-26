import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";

export default function Feed() {
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
      <h1 className="font-heading mb-6 text-3xl">Feeds</h1>
      <div className="space-y-4">
        {posts.map(({ post }) => (
          <div
            key={post.id}
            className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-sm transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
            onClick={() => handlePostClick(post.id)}
          >
            <p className="font-body line-clamp-3 text-base text-gray-900 dark:text-gray-100">{post.content}</p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Likes: {post.likes} | Comments: {post.comments}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

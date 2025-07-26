import { useEffect, useState } from "react";
import { backendService } from "../services/backendService";
import type { FeedPost } from "../services/canister";
import PostCard from "./PostCard";

export default function Feed() {
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

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

  // Refetch posts when navigating back to feed
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
    setSelectedPostId(postId);
  };

  const closeModal = () => {
    setSelectedPostId(null);
  };

  return (
    <>
      <div className="space-y-4 p-4">
        {posts.map(({ post }) => (
          <div
            key={post.id}
            className="cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-sm transition hover:bg-gray-200"
            onClick={() => handlePostClick(post.id)}
          >
            <p className="font-body line-clamp-3 text-base text-gray-900">
              {post.content}
            </p>
            <div className="mt-2 text-sm text-gray-600">
              Likes: {post.likes} | Comments: {post.comments}
            </div>
          </div>
        ))}
      </div>

      {selectedPostId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 p-6">
          <div className="relative max-h-full w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 rounded bg-gray-200 px-3 py-1 text-sm font-semibold hover:bg-gray-300"
              onClick={closeModal}
            >
              Close
            </button>
            <PostCard postId={selectedPostId} />
          </div>
        </div>
      )}
    </>
  );
}

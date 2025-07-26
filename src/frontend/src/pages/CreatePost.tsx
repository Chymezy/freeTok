import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendService } from "../services/backendService";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const maxLength = 1000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (content.trim().length === 0) {
      setError("Post content cannot be empty.");
      return;
    }
    if (content.length > maxLength) {
      setError(`Post content must be less than ${maxLength} characters.`);
      return;
    }

    setLoading(true);
    try {
      const result = await backendService.createPost(content);
      console.log("CreatePost result:", result);
      // Assuming result has #ok or #err structure
      if ("#ok" in result) {
        navigate("/dashboard");
      } else if ("#err" in result) {
        setError(String(result["#err"]));
      } else {
        setError("Unknown error occurred.");
      }
    } catch (err: unknown) {
      if (typeof err === "string") {
        setError(err);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to create post.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="font-heading mb-6 text-3xl">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="focus:ring-primary w-full resize-y rounded border border-gray-300 p-3 text-base focus:ring-2 focus:outline-none bg-white text-gray-900"
          rows={6}
          maxLength={maxLength}
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>
            {content.length} / {maxLength}
          </span>
          {error && <span className="text-red-500">{error}</span>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary hover:bg-primary-dark rounded px-6 py-3 font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

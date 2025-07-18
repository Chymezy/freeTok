interface Profile {
  id: string;
  username: string;
  bio: string;
  avatar: string;
  createdAt: number;
  updatedAt: number;
}

interface Post {
  id: number;
  authorId: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  likes: number;
  comments: number;
}

export default function PostCard({ post, author }: { post: Post; author: Profile }) {
  return (
    <div className="bg-white dark:bg-charcoal-black rounded-xl shadow-glow p-6 flex flex-col gap-2">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-deep-indigo flex items-center justify-center text-white text-xl font-bold">
          {author.avatar || author.username[0]}
        </div>
        <div>
          <div className="font-heading font-bold text-lg text-deep-indigo">{author.username}</div>
          <div className="text-xs text-gray-400">{new Date(post.createdAt / 1_000_000).toLocaleString()}</div>
        </div>
      </div>
      <div className="font-body text-dark dark:text-light text-base mb-2">{post.content}</div>
      <div className="flex gap-6 mt-2">
        <button className="flex items-center gap-1 text-vibrant-orange hover:underline">
          <span>👍</span> {post.likes}
        </button>
        <button className="flex items-center gap-1 text-electric-blue hover:underline">
          <span>💬</span> {post.comments}
        </button>
      </div>
    </div>
  );
} 
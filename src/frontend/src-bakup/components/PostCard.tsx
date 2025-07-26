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

export default function PostCard({
  post,
  author,
}: {
  post: Post;
  author: Profile;
}) {
  return (
    <div className="dark:bg-charcoal-black shadow-glow flex flex-col gap-2 rounded-xl bg-white p-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="bg-deep-indigo flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white">
          {author.avatar || author.username[0]}
        </div>
        <div>
          <div className="font-heading text-deep-indigo text-lg font-bold">
            {author.username}
          </div>
          <div className="text-xs text-gray-400">
            {new Date(post.createdAt / 1_000_000).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="font-body text-dark dark:text-light mb-2 text-base">
        {post.content}
      </div>
      <div className="mt-2 flex gap-6">
        <button className="text-vibrant-orange flex items-center gap-1 hover:underline">
          <span>👍</span> {post.likes}
        </button>
        <button className="text-electric-blue flex items-center gap-1 hover:underline">
          <span>💬</span> {post.comments}
        </button>
      </div>
    </div>
  );
}

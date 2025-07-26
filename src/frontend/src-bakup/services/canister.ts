// This file should wrap your canister JS interface for type-safe calls
// Adjust the import path to your actual canister declarations
import { backend } from "../../../declarations/backend/index.js";

export interface Profile {
  id: string;
  username: string;
  bio: string;
  avatar: string;
  createdAt: number;
  updatedAt: number;
}

export interface Post {
  id: number;
  authorId: string;
  content: string;
  createdAt: number;
  updatedAt: number;
  likes: number;
  comments: number;
}

export interface FeedPost {
  post: Post;
  author: Profile;
}

export async function getFeed(): Promise<FeedPost[]> {
  // Call the canister's getFeed method with BigInt params
  const result = await backend.getFeed(BigInt(0), BigInt(20));
  // Map all bigint fields to number for frontend compatibility
  return result.map((item: any) => ({
    post: {
      ...item.post,
      id: Number(item.post.id),
      authorId: item.post.authorId.toString(),
      createdAt: Number(item.post.createdAt),
      updatedAt: Number(item.post.updatedAt),
      likes: Number(item.post.likes),
      comments: Number(item.post.comments),
    },
    author: {
      ...item.author,
      id: item.author.id.toString(),
      createdAt: Number(item.author.createdAt),
      updatedAt: Number(item.author.updatedAt),
    },
  }));
}

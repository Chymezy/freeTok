import { backend } from "../../../declarations/backend";

export const backendService = {
  async getFeed(limit: number = 20, offset: number = 0) {
    const result = await backend.getFeed(BigInt(offset), BigInt(limit));
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
  },
};

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

  async createPost(content: string) {
    const result = await backend.createPost(content);
    return result;
  },

  async likePost(postId: number) {
    const result = await backend.likePost(BigInt(postId));
    return result;
  },

  async unlikePost(postId: number) {
    const result = await backend.unlikePost(BigInt(postId));
    return result;
  },

  async addComment(postId: number, content: string) {
    const result = await backend.addComment(BigInt(postId), content);
    return result;
  },

  async getComments(postId: number) {
    const comments = await backend.getComments(BigInt(postId));
    return comments.map((comment: any) => ({
      ...comment,
      id: Number(comment.id),
      postId: Number(comment.postId),
      authorId: comment.authorId.toString(),
      createdAt: Number(comment.createdAt),
      updatedAt: Number(comment.updatedAt),
    }));
  },

  async getProfile(principal: string) {
    // Cast principal to any to bypass type error
    const result = await backend.getProfile(principal as any);
    if (result.length > 0) {
      return result.map((profile: any) => ({
        ...profile,
        id: profile.id?.toString(),
        createdAt: Number(profile.createdAt),
        updatedAt: Number(profile.updatedAt),
      }));
    }
    return [];
  },

  async updateProfile(username: string, bio: string, avatar: string) {
    const result = await backend.updateProfile(username, bio, avatar);
    return result;
  },

  async createProfile(username: string, bio: string, avatar: string) {
    const result = await backend.createProfile(username, bio, avatar);
    return result;
  },
};

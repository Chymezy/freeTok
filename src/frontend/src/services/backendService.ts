import { backend } from '../../../declarations/backend';
import { Principal } from '@dfinity/principal';

export const BackendService = {
  getFeed: (offset = 0n, limit = 20n) => backend.getFeed(offset, limit),
  createPost: (content: string) => backend.createPost(content),
  likePost: (postId: bigint) => backend.likePost(postId),
  addComment: (postId: bigint, content: string) => backend.addComment(postId, content),
  getComments: (postId: bigint) => backend.getComments(postId),
  getProfile: (principal: string) => backend.getProfile(Principal.fromText(principal)),
  updateProfile: (username: string, bio: string, avatar: string) => backend.updateProfile(username, bio, avatar),
  createProfile: (username: string, bio: string, avatar: string) => backend.createProfile(username, bio, avatar),
}; 
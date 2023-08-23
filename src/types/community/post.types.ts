export interface PostInfo {
  postId: number;
  postTitle: string;
  postLikeCount: number;
  postCategory: '자유게시판' | 'Q&A' | '팀원 모집';
  writer: string;
}

export interface BestPostInfo {
  postId: number;
  postTitle: string;
  postLikeCount: number;
}
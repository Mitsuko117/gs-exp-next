// src/types/index.ts

// ========================================
// 投稿の型定義（更新）
// ========================================

export type Post = {
  id: number;
  content: string;
  imageUrl: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;

  // --- Day3 追加 ここから ---
  likeCount: number;   // いいね数
  isLiked: boolean;    // ログインユーザーがいいねしているか
  // --- Day3 追加 ここまで ---
};

// ========================================
// サンプルデータ用の型
// ========================================
// 今日はダミーデータを使うので、この型も用意

export type SamplePost = {
  id: number;
  username: string;
  content: string;
  image: string | null;
  likes: number;
  isLiked: boolean;
  createdAt: string;
};
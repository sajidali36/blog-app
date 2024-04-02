export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: string | null;
}

export interface Comment {
  id: number;
  body: string;
  name: string;
  email: string;
  postId: number;
}

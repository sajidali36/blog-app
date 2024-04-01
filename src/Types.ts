export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

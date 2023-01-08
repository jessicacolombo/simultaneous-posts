export interface iPost {
  id: string;
  content: string;
  username: string;
  createdAt: string;
  updatedAt?: string;
}

export interface iRequestPost {
  content: string;
  username: string;
}

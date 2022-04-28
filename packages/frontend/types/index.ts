interface DateAttribues {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Post extends DateAttribues {
  title: string;
  content: string;
  user?: User;
}

interface User extends DateAttribues {
  username: string;
  email: string;
  confirmed: boolean;
  posts?: Array<Post>;
}

export { Post, User };

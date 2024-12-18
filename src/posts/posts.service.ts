import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor() {}

  posts = [
    {
      id: 1,
      title: 'Post 1',
      body: 'This is post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is post 2',
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'This is post 3',
    },
    {
      id: 4,
      title: 'Post 4',
      body: 'This is post 4',
    },
  ];

  fetchAllPosts() {
    return { data: this.posts, error: null };
  }

  fetchPostById(id: string) {
    const post = this.posts.find((post) => post.id === Number(id));
    if (!post) {
      return { data: null, error: 'Post not found' };
    }
    return { data: post, error: null };
  }

  deletePostById(id: string) {
    const post = this.posts.find((post) => post.id === Number(id));
    if (!post) {
      return { data: null, error: 'Post not found' };
    }
    this.posts = this.posts.filter((post) => post.id !== Number(id));
    return { data: post, error: null };
  }
}

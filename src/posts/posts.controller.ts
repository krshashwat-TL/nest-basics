import { Controller, Get, Delete, HttpCode, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  fetchAllPosts() {
    return this.postService.fetchAllPosts();
  }

  @Get('/:id')
  @HttpCode(201)
  fetchPostById(@Param('id') id) {
    return this.postService.fetchPostById(id);
  }

  @Delete('/:id')
  @HttpCode(207)
  deletePostById(@Param('id') id) {
    return this.postService.deletePostById(id);
  }
}

// post.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PostService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: HttpStatus.CREATED })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: HttpStatus.OK })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post by id' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update post' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}

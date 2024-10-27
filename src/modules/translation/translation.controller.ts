// post-translation.controller.ts
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
import { PostTranslationService } from './translation.service';
import {
  BasePostTranslationDto,
  UpdatePostTranslationDto,
} from './dto/translation.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('post-translations')
@Controller('post-translations')
export class PostTranslationController {
  constructor(
    private readonly postTranslationService: PostTranslationService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post translation' })
  @ApiResponse({ status: HttpStatus.CREATED })
  create(@Body() createPostTranslationDto: BasePostTranslationDto) {
    return this.postTranslationService.create(createPostTranslationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all post translations' })
  @ApiResponse({ status: HttpStatus.OK })
  findAll() {
    return this.postTranslationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post translation by id' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Translation not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postTranslationService.findOne(id);
  }

  @Get('post/:postId')
  @ApiOperation({ summary: 'Get translations by post id' })
  @ApiResponse({ status: HttpStatus.OK })
  findByPostId(@Param('postId', ParseIntPipe) postId: number) {
    return this.postTranslationService.findByPostId(postId);
  }

  @Get('language/:languageId')
  @ApiOperation({ summary: 'Get translations by language id' })
  @ApiResponse({ status: HttpStatus.OK })
  findByLanguageId(@Param('languageId', ParseIntPipe) languageId: number) {
    return this.postTranslationService.findByLanguageId(languageId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update post translation' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Translation not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostTranslationDto: UpdatePostTranslationDto,
  ) {
    return this.postTranslationService.update(id, updatePostTranslationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post translation' })
  @ApiResponse({ status: HttpStatus.OK })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Translation not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postTranslationService.remove(id);
  }
}

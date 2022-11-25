import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Ramez', email: 'rameztaher2002@gmail.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Ramez',
        email: 'rameztaher2002@gmail.com',
        posts: [
          { id: 2, title: 'nest js post' },
          { id: 1, title: 'nest js post' },
          { id: 3, title: 'nest js post' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return {
      id: 1,
      title: 'nestjs post',
      comments: ['bla blabla', 'blablabla'],
    };
  }

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('Created');
  }
}

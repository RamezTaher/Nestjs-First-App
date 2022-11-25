import { Body, Controller, Get, Post, Req, Res, Param } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

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
  createUser(@Body() userInfo: CreateUserDto) {
    console.log(userInfo);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id: id };
  }
}

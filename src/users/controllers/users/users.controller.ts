import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Ramez', email: 'rameztaher2002@gmail.com' };
  }
}

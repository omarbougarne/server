import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return {user: 'name', adress: 'cool'}
    }

    @Post()
    createUsers(@Req() request: Request, @Res() response: Response){
        console.log(request.body);
        return response.json()
    }
}

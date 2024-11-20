import { Body, Controller, Get, Param, ParseBoolPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor ( private userService: UsersService ){}

    @Get()
    getUsers(@Query('sortAsc', ParseBoolPipe) sortBy: string) {
        return {user: 'name', adress: 'cool'}
    }

    @Post()
    @UsePipes(new ValidationPipe)
    createUser(@Body () userData: CreateUserDto ){
        return this.userService.createUsers(userData)
    }

    // @Get(':id')
    // getUniqueId(@Param('id', ) id: string){
    //     console.log(id)
    //     return {id}
    // }

    @Get('all')
    getThemAll(){
        return this.userService.fetchUsers();
    }
    
}

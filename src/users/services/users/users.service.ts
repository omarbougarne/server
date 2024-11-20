import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [        
        {name: 'omar', email: 'omar@mail.com'},
        {name: 'malik', email: 'malik@mail.com'}
    
    ]

    fetchUsers() {
        return this.fakeUsers
    }

    createUsers(userDetails: CreateUserType){
         this.fakeUsers.push(userDetails)
         return{};
    }



}

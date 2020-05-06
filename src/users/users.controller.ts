import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';

@Crud({
    model: {
        type: User,
    }
})
@Controller('users')
export class UsersController implements CrudController<User> {
    constructor(public service: UsersService) {}
}

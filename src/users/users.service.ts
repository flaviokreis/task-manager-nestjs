import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll() {
        return 'This route get all users';
    }
}

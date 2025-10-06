import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { FindUserUseCase } from '../../application/use-cases/find-user.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/update-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user.use-case';
import { PromoteUserUseCase } from '../../application/use-cases/promote-user.use-case';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly findUser: FindUserUseCase,
    private readonly updateUser: UpdateUserUseCase,
    private readonly deleteUser: DeleteUserUseCase,
    private readonly promoteUser: PromoteUserUseCase,
  ) {}

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.createUser.execute(body);
  }

  @Get()
  findAll() {
    return this.findUser.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findUser.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateUser.execute(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUser.execute(id);
  }

  @Post(':id/promote')
  async promote(@Param('id') id: string) {
    return await this.promoteUser.execute(id);
  }
}

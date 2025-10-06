import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from '../../domain/ports/outbound/user.repository.port';
import type { UserRepositoryPort } from '../../domain/ports/outbound/user.repository.port';

@Injectable()
export class FindUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: UserRepositoryPort,
  ) {}

  execute(id?: string) {
    return id ? this.userRepo.findById(id) : this.userRepo.findAll();
  }
}

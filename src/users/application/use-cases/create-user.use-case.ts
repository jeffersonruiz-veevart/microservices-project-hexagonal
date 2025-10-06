import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { USER_REPOSITORY } from '../../domain/ports/outbound/user.repository.port';
import type { UserRepositoryPort } from '../../domain/ports/outbound/user.repository.port';
import { User } from '../../domain/entities/user.entity';
import { ExternalEmailValidationAdapter } from '../../infrastructure/adapters/external/external-email-validation.adapter';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: UserRepositoryPort,
    private readonly externalEmailValidator: ExternalEmailValidationAdapter,
  ) {}

  async execute(payload: { name: string; email: string }) {
    const ok = await this.externalEmailValidator.validateEmail(payload.email);
    if (!ok) throw new Error('Email is invalid (external check)');

    const id = uuidv4();
    const user = new User(id, payload.name, payload.email);
    return this.userRepo.save(user);
  }
}

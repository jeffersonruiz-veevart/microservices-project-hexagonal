import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from '../../domain/ports/outbound/user.repository.port';
import type { UserRepositoryPort } from '../../domain/ports/outbound/user.repository.port';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: UserRepositoryPort,
  ) {}

  execute(id: string, data: Partial<any>) {
    // permite actualizar purchasesCount y lastPurchaseDate (simula compras)
    if (data.lastPurchaseDate && typeof data.lastPurchaseDate === 'string') {
      data.lastPurchaseDate = new Date(data.lastPurchaseDate);
    }
    return this.userRepo.update(id, data);
  }
}

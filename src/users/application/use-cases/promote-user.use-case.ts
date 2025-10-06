import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from '../../domain/ports/outbound/user.repository.port';
import type { UserRepositoryPort } from '../../domain/ports/outbound/user.repository.port';
import { USER_PROMOTION_SERVICE } from '../../domain/ports/inbound/user-promotion.service.port';
import type { UserPromotionServicePort } from '../../domain/ports/inbound/user-promotion.service.port';
import type { User } from '../../domain/entities/user.entity';

@Injectable()
export class PromoteUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: UserRepositoryPort,
    @Inject(USER_PROMOTION_SERVICE)
    private readonly promotionService: UserPromotionServicePort,
  ) {}

  async execute(userId: string): Promise<User> {
    const user = this.userRepo.findById(userId);
    if (!user) throw new Error('User not found');
    const promoted = await this.promotionService.promote(user); // domain service hará credit-check
    this.userRepo.update(promoted.id, promoted);
    return promoted;
  }
}

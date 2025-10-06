import { Injectable, Inject } from '@nestjs/common';
import type { UserPromotionServicePort } from './ports/inbound/user-promotion.service.port';
import { User } from './entities/user.entity';
import { CREDIT_CHECK_PORT } from './ports/outbound/credit-check.port';
import type { CreditCheckPort } from './ports/outbound/credit-check.port';

@Injectable()
export class UserPromotionDomainService implements UserPromotionServicePort {
  constructor(
    @Inject(CREDIT_CHECK_PORT) private readonly creditCheck: CreditCheckPort,
  ) {}

  async promote(user: User): Promise<User> {
    // Esta regla de negocio depende de un servicio externo (credit-check)
    const score = await this.creditCheck.getCreditScore(user.id);
    if (score < 500) throw new Error('Insufficient credit score to promote');
    user.promoteToPremium(); // llama a la regla del entity
    return user;
  }
}

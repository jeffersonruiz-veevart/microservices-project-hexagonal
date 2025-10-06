import { Module } from '@nestjs/common';
import { PersistenceModule } from './infrastructure/adapters/persistence/persistence.module';
import { ExternalModule } from './infrastructure/adapters/external/external.module';
import { UserController } from './infrastructure/controllers/user.controller';

// use cases
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { FindUserUseCase } from './application/use-cases/find-user.use-case';
import { UpdateUserUseCase } from './application/use-cases/update-user.use-case';
import { DeleteUserUseCase } from './application/use-cases/delete-user.use-case';
import { PromoteUserUseCase } from './application/use-cases/promote-user.use-case';

// domain services & providers
import { USER_PROMOTION_SERVICE } from './domain/ports/inbound/user-promotion.service.port';
import { UserPromotionDomainService } from './domain/user-promotion.domain-service';

@Module({
  imports: [PersistenceModule, ExternalModule],
  controllers: [UserController],
  providers: [
    // use cases
    CreateUserUseCase,
    FindUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    PromoteUserUseCase,

    // domain service registered as token (implements UserPromotionServicePort)
    { provide: USER_PROMOTION_SERVICE, useClass: UserPromotionDomainService },
  ],
  exports: [],
})
export class UserModule {}

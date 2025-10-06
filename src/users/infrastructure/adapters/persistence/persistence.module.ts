import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../domain/ports/outbound/user.repository.port';
import { InMemoryUserRepositoryAdapter } from './in-memory-user.repository.adapter';

@Module({
  providers: [
    { provide: USER_REPOSITORY, useClass: InMemoryUserRepositoryAdapter },
  ],
  exports: [USER_REPOSITORY],
})
export class PersistenceModule {}

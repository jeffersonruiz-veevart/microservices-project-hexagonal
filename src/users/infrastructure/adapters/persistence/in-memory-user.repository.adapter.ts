import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import type { UserRepositoryPort } from '../../../domain/ports/outbound/user.repository.port';

@Injectable()
export class InMemoryUserRepositoryAdapter implements UserRepositoryPort {
  private users = new Map<string, User>();

  save(user: User): User {
    this.users.set(user.id, user);
    return user;
  }

  findById(id: string): User | null {
    return this.users.get(id) ?? null;
  }

  findAll(): User[] {
    return Array.from(this.users.values());
  }

  update(id: string, data: Partial<User>): User {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const existing = this.findById(id);
    if (!existing) throw new Error('User not found');
    Object.assign(existing, data);
    this.users.set(id, existing);
    return existing;
  }

  delete(id: string): void {
    this.users.delete(id);
  }
}

import { User } from '../../entities/user.entity';

export interface UserRepositoryPort {
  save(user: User): User;
  findById(id: string): User | null;
  findAll(): User[];
  update(id: string, user: Partial<User>): User;
  delete(id: string): void;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

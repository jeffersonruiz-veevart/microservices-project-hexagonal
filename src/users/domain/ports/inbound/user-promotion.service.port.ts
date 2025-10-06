import { User } from '../../entities/user.entity';

export interface UserPromotionServicePort {
  promote(user: User): Promise<User>;
}

export const USER_PROMOTION_SERVICE = Symbol('USER_PROMOTION_SERVICE');

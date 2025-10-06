export interface CreditCheckPort {
  getCreditScore(userId: string): Promise<number>;
}

export const CREDIT_CHECK_PORT = Symbol('CREDIT_CHECK_PORT');

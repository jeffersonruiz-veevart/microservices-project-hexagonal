import { Injectable } from '@nestjs/common';
import type { CreditCheckPort } from '../../../domain/ports/outbound/credit-check.port';

@Injectable()
export class CreditCheckHttpAdapter implements CreditCheckPort {
  async getCreditScore(userId: string): Promise<number> {
    console.log(
      `[CreditCheckHttpAdapter] simulating HTTP request for credit score of ${userId}`,
    );
    await new Promise((res) => setTimeout(res, 300));
    return Math.floor(Math.random() * 1000);
  }
}

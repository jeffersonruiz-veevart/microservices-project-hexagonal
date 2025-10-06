import { Module } from '@nestjs/common';
import { ExternalEmailValidationAdapter } from './external-email-validation.adapter';
import { CreditCheckHttpAdapter } from './credit-check-http.adapter';
import { CREDIT_CHECK_PORT } from '../../../domain/ports/outbound/credit-check.port';

@Module({
  providers: [
    ExternalEmailValidationAdapter,
    { provide: CREDIT_CHECK_PORT, useClass: CreditCheckHttpAdapter },
  ],
  exports: [ExternalEmailValidationAdapter, CREDIT_CHECK_PORT],
})
export class ExternalModule {}

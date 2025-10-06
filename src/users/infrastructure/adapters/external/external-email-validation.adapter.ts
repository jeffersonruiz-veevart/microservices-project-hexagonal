import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalEmailValidationAdapter {
  async validateEmail(email: string): Promise<boolean> {
    console.log(
      `[ExternalEmailValidationAdapter] simulating HTTP call for ${email}`,
    );
    await new Promise((res) => setTimeout(res, 200));
    return !email.endsWith('@invalid.com');
  }
}

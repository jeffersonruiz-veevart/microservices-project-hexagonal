export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public purchasesCount: number = 0,
    public lastPurchaseDate: Date | null = null,
    public isPremium: boolean = false,
  ) {}

  canBePromotedToPremium(): boolean {
    if (this.purchasesCount < 3) return false;
    if (!this.lastPurchaseDate) return false;
    const daysSince =
      (Date.now() - this.lastPurchaseDate.getTime()) / (1000 * 60 * 60 * 24);
    return daysSince <= 30;
  }

  promoteToPremium(): void {
    if (!this.canBePromotedToPremium()) {
      throw new Error('User does not meet criteria for Premium');
    }
    this.isPremium = true;
  }
}

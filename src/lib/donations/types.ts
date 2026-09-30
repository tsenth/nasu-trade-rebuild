export type DonationSource = "api" | "onchain" | "manual" | "unavailable";

export interface DonationData {
  totalDonated: number | null;
  currency: string | null;
  latestTransfer: { amount: number; currency: string; date: string; txUrl?: string } | null;
  source: DonationSource;
  updatedAt: string | null;
}

import { siteConfig } from "@/src/config/site.config";
import type { DonationData } from "./types";

export interface DonationProvider { getDonationData(): Promise<DonationData>; }

class ConfigDonationProvider implements DonationProvider {
  async getDonationData(): Promise<DonationData> {
    return {
      totalDonated: siteConfig.totalDonated,
      currency: siteConfig.donationCurrency,
      latestTransfer: siteConfig.latestTransfer,
      source: siteConfig.donationDataSource,
      updatedAt: siteConfig.donationUpdatedAt,
    };
  }
}

const provider: DonationProvider = new ConfigDonationProvider();

export async function getDonationData(): Promise<DonationData> {
  try { return await provider.getDonationData(); }
  catch { return { totalDonated: null, currency: null, latestTransfer: null, source: "unavailable", updatedAt: null }; }
}

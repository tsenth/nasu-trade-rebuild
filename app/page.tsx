import { AttackStory } from "@/src/components/AttackStory";
import { DirectDonation } from "@/src/components/DirectDonation";
import { Disclaimer } from "@/src/components/Disclaimer";
import { Footer } from "@/src/components/Footer";
import { FundingFlow } from "@/src/components/FundingFlow";
import { Hero } from "@/src/components/Hero";
import { Mission } from "@/src/components/Mission";
import { Transparency } from "@/src/components/Transparency";
import { getDonationData } from "@/src/lib/donations/provider";

export default async function Home() {
  const donationData = await getDonationData();

  return (
    <main>
      <Hero />
      <AttackStory />
      <Mission />
      <FundingFlow />
      <Transparency data={donationData} />
      <DirectDonation />
      <Disclaimer />
      <Footer />
    </main>
  );
}

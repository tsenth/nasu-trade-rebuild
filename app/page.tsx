import { AttackStory } from "@/src/components/AttackStory";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowToHelp } from "@/src/components/HowToHelp";
import { getDonationData } from "@/src/lib/donations/provider";

export default async function Home() {
  const donationData = await getDonationData();
  return <main><Hero /><AttackStory /><HowToHelp data={donationData} /><Footer /></main>;
}

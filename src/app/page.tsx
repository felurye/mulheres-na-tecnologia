import { Hero } from "@/components/Hero";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { HomeSections } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
      <Community />
      <Footer />
    </>
  );
}

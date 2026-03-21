import { Hero } from "@/components/Hero";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import {
  Articles,
  Books,
  YouTubeChannels,
  Communities,
  CommunityArticles,
  Instagram,
  Videos,
} from "@/components/Contents";

export default function Home() {
  return (
    <>
      <Hero />

      <Articles />
      <Books />
      <YouTubeChannels />
      <Videos />
      <Communities />
      <CommunityArticles />
      <Instagram />

      <Community />
      <Footer />
    </>
  );
}

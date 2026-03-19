import { SectionPage } from "@/components/SectionPage";

export default async function CanaisYoutubePage() {
  return (
    <SectionPage
      fileName="youtube-channels.json"
      fallbackTitle="Canais do YouTube"
    />
  );
}

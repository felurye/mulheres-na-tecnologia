import { SectionPage } from "@/components/SectionPage";

export default async function ArtigosComunidadesPage() {
  return (
    <SectionPage
      fileName="community-articles.json"
      fallbackTitle="Artigos das Comunidades"
    />
  );
}

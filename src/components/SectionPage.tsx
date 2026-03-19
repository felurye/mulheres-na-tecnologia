import Link from "next/link";
import { ContentSection } from "./ContentSection";
import { Footer } from "./Footer";
import { readContentSection } from "@/lib/content";

interface SectionPageProps {
  fileName: string;
  fallbackTitle: string;
}

export const SectionPage = async ({
  fileName,
  fallbackTitle,
}: SectionPageProps) => {
  const section = await readContentSection(fileName);

  return (
    <>
      <section className="content-section container">
        <Link href="/sessoes" className="btn-ghost">
          Voltar para sessões
        </Link>
      </section>
      <ContentSection
        section={{ ...section, title: section.title || fallbackTitle }}
      />
      <Footer />
    </>
  );
};

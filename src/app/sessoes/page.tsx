import Link from "next/link";
import { Footer } from "@/components/Footer";
import { CONTENT_SECTION_FILES } from "@/data/contentSections";

export default function SessoesPage() {
  return (
    <>
      <section className="content-section container">
        <div className="section-main-title">
          <h1>Todas as sessões</h1>
        </div>

        <div className="round-list">
          {CONTENT_SECTION_FILES.map((section) => (
            <Link
              key={section.slug}
              href={section.routePath}
              className="btn-ghost"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

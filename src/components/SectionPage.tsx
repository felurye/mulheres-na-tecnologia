import Link from "next/link";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface SectionPageProps {
  children: ReactNode;
}

export const SectionPage = ({ children }: SectionPageProps) => {
  return (
    <>
      <section className="content-section container">
        <Link href="/sessoes" className="btn-ghost">
          Voltar para sessões
        </Link>
      </section>
      {children}
      <Footer />
    </>
  );
};

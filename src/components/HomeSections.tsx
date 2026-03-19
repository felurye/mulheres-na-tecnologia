import { ContentSection } from "./ContentSection";
import { readAllContentSections } from "@/lib/content";

export const HomeSections = async () => {
  const sections = await readAllContentSections();

  return (
    <>
      {sections.map((section, index) => (
        <ContentSection
          key={`${section.htmlAttributes.idSection ?? "section"}-${index}`}
          section={section}
        />
      ))}
    </>
  );
};

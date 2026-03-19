import { readFile } from "fs/promises";
import path from "path";
import { ContentSection } from "@/types/content";
import { CONTENT_SECTION_FILES } from "@/data/contentSections";

const CONTENT_DIR = path.join(process.cwd(), "public", "content");

export const readContentSection = async (
  fileName: string
): Promise<ContentSection> => {
  const filePath = path.join(CONTENT_DIR, fileName);
  const content = await readFile(filePath, "utf-8");
  return JSON.parse(content) as ContentSection;
};

export const readAllContentSections = async (): Promise<ContentSection[]> => {
  const sections = await Promise.all(
    CONTENT_SECTION_FILES.map(async ({ fileName, title }) => {
      const section = await readContentSection(fileName);
      return {
        ...section,
        title: section.title || title,
      };
    })
  );

  return sections;
};

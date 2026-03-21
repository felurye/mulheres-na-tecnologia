import { ContentSection } from "@/components/ContentSection";
import { readContentSection } from "@/lib/content";

export async function Articles() {
  const section = await readContentSection("articles.json");
  return (
    <ContentSection
      section={{ ...section, title: section.title || "Artigos" }}
    />
  );
}

export async function Books() {
  const section = await readContentSection("books.json");
  return (
    <ContentSection
      section={{ ...section, title: section.title || "Livros & E-books" }}
    />
  );
}

export async function Communities() {
  const section = await readContentSection("communities.json");
  return (
    <ContentSection
      section={{ ...section, title: section.title || "Comunidades" }}
    />
  );
}

export async function CommunityArticles() {
  const section = await readContentSection("community-articles.json");
  return <ContentSection section={{ ...section }} />;
}

export async function Instagram() {
  const section = await readContentSection("instagram.json");
  return (
    <ContentSection
      section={{ ...section, title: section.title || "Instagram" }}
    />
  );
}

export async function Videos() {
  const section = await readContentSection("videos.json");
  return <ContentSection section={{ ...section }} />;
}

export async function YouTubeChannels() {
  const section = await readContentSection("youtube-channels.json");
  return (
    <ContentSection
      section={{ ...section, title: section.title || "Canais do YouTube" }}
    />
  );
}

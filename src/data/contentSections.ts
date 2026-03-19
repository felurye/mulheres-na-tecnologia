export interface ContentSectionFile {
  slug: string;
  title: string;
  fileName: string;
  routePath: string;
}

export const CONTENT_SECTION_FILES: ContentSectionFile[] = [
  {
    slug: "artigos",
    title: "Artigos",
    fileName: "articles.json",
    routePath: "/artigos",
  },
  {
    slug: "livros",
    title: "Livros & E-books",
    fileName: "books.json",
    routePath: "/livros",
  },
  {
    slug: "canais-youtube",
    title: "Canais do YouTube",
    fileName: "youtube-channels.json",
    routePath: "/canais-youtube",
  },
  {
    slug: "videos",
    title: "Videos",
    fileName: "videos.json",
    routePath: "/videos",
  },
  {
    slug: "comunidades",
    title: "Comunidades",
    fileName: "communities.json",
    routePath: "/comunidades",
  },
  {
    slug: "artigos-comunidades",
    title: "Artigos de Comunidades",
    fileName: "community-articles.json",
    routePath: "/artigos-comunidades",
  },
  {
    slug: "instagram",
    title: "Instagram",
    fileName: "instagram.json",
    routePath: "/instagram",
  },
];

import type { MetadataRoute } from "next";

const baseUrl = "https://pparealestate.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/a-ppa` },
    { url: `${baseUrl}/tese` },
    { url: `${baseUrl}/portfolio` },
    { url: `${baseUrl}/imprensa` },
    { url: `${baseUrl}/contato` },
  ];
}

import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dewitsoftware.nl/en/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://dewitsoftware.nl/en/about',
          nl: 'https://dewitsoftware.nl/nl/about',
        },
      },
    },
    {
      url: 'https://dewitsoftware.nl/en/projects',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://dewitsoftware.nl/en/projects',
          nl: 'https://dewitsoftware.nl/nl/projects',
        },
      },
    },
    {
      url: 'https://dewitsoftware.nl/en/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://dewitsoftware.nl/en/contact',
          nl: 'https://dewitsoftware.nl/nl/contact',
        },
      },
    },
    {
      url: 'https://dewitsoftware.nl/en/skills',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://dewitsoftware.nl/en/skills',
          nl: 'https://dewitsoftware.nl/nl/skills',
        },
      },
    },
    {
      url: 'https://dewitsoftware.nl/en/downloads',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://dewitsoftware.nl/en/downloads',
          nl: 'https://dewitsoftware.nl/nl/downloads',
        },
      },
    },
  ]
}
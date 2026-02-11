const SITE_URL = "https://pohrebniustavkralupy.cz";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

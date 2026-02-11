const SITE_URL = "https://pohrebniustavkralupy.cz";

const routes = [
  { path: "", priority: 1.0 },
  { path: "pro-pozustale", priority: 0.9 },
  { path: "sluzby", priority: 0.85 },
  { path: "sluzby/pohrbybezobradu", priority: 0.8 },
  { path: "sluzby/pohrby", priority: 0.8 },
  { path: "sluzby/hudba", priority: 0.8 },
  { path: "sluzby/parte", priority: 0.8 },
  { path: "katalog/parteObrazky", priority: 0.8 },
  { path: "katalog/rakve", priority: 0.8 },
  { path: "katalog/kvetiny", priority: 0.8 },
  { path: "katalog/urny", priority: 0.8 },
  { path: "o-nas/historie", priority: 0.8 },
  { path: "o-nas/fotogalerie", priority: 0.8 },
  { path: "o-nas/recenze", priority: 0.8 },
  { path: "kontakt", priority: 0.9 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}

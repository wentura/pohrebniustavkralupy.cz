import Footer from "@/components/footer";
import "./globals.css";
import "./style.css";

const SITE_URL = "https://pohrebniustavkralupy.cz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pohřební ústav Cibulka | Kralupy nad Vltavou",
    template: "%s | Pohřební ústav Cibulka",
  },
  description:
    "Pohřební ústav Cibulka v Kralupech nad Vltavou. Rodinná tradice od roku 1914. Pohřby s obřadem i bez, smuteční oznámení, rakve, urny.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Pohřební ústav Cibulka",
    title: "Pohřební ústav Cibulka | Kralupy nad Vltavou",
    description:
      "Pohřební ústav Cibulka v Kralupech nad Vltavou. Rodinná tradice od roku 1914.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="bg-white scroll-smooth overflow-scroll">
      <body className="2xl:container mx-auto">
        {/* <Header klass="transparent" /> */}
        {/* <Hero /> */}
        {/* <BannerPhone klas="" /> */}

        {children}
        {/* <BannerContact /> */}
        <Footer />
      </body>
    </html>
  );
}

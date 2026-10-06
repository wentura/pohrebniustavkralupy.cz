import {
  Libre_Baskerville,
  Montserrat,
  Charm,
} from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";
import "./style.css";

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-libre",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["200", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const charm = Charm({
  weight: "700",
  subsets: ["latin", "latin-ext"],
  variable: "--font-charm",
  display: "swap",
});

const SITE_URL = "https://pohrebniustavkralupy.cz";
const OG_IMAGE =
  "https://res.cloudinary.com/dam7wdzvx/image/upload/f_auto,q_auto,w_1200/v1703670731/pohrebniustavcibulka/hero_ambr9j.webp";

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Pohřební ústav Cibulka" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pohřební ústav Cibulka | Kralupy nad Vltavou",
    description:
      "Pohřební ústav Cibulka v Kralupech nad Vltavou. Rodinná tradice od roku 1914.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      data-scroll-behavior="smooth"
      className={`bg-white scroll-smooth overflow-scroll ${libreBaskerville.variable} ${montserrat.variable} ${charm.variable}`}
    >
      <body className="2xl:container mx-auto font-obsah">
        {children}
        <Footer />
      </body>
    </html>
  );
}

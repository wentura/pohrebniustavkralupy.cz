import BannerContact from "@/components/bannerContact";
import BannerPhone from "@/components/bannerPhone";
import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import "./globals.css";
import "./style.css";
export const metadata = {
  title: "Pohřební ústav Cibulka, Kralupy nad Vltavou",
  description:
    "Pohřební ústav Cibulka, Kralupy nad Vltavou. Rodinná tradice od roku 1914.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="container mx-auto">
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

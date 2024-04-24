import BannerContact from "@/components/bannerContact";
import BannerPhone from "@/components/bannerPhone";
import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SmallHero from "@/components/smallHero";
import "../globals.css";
import "../style.css";

export const metadata = {
  title: "Pohřební ústav Cibulka, Kralupy nad Vltavou",
  description:
    "Pohřební ústav Cibulka, Kralupy nad Vltavou. Rodinná tradice od roku 1914.",
  
};

export default function ContentLayout({ children }) {
  return (
    <div>
      <Header klass="transparent" />
      <SmallHero title="" />
      <BannerPhone />
      {children}
    </div>
  );
}

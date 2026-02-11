import BannerPhone from "@/components/bannerPhone";
import Header from "@/components/header";
import SmallHero from "@/components/smallHero";
import "../globals.css";
import "../style.css";

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

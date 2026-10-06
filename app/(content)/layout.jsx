import BannerPhone from "@/components/bannerPhone";
import Header from "@/components/header";
import SmallHero from "@/components/smallHero";

export default function ContentLayout({ children }) {
  return (
    <div>
      <Header klass="transparent" />
      <SmallHero />
      <BannerPhone />
      {children}
    </div>
  );
}

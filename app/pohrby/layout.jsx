import BannerPhone from "@/components/bannerPhone";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SmallHero from "@/components/smallHero";
import "../globals.css";
import "../style.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Header klass="transparent" />
        <SmallHero title="pohřby" />
        <BannerPhone />
        {children}
        <Footer />
      </body>
    </html>
  );
}

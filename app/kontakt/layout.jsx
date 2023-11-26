import BannerPhone from "@/components/bannerPhone";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Logo from "@/components/logo";
import SmallHero from "@/components/smallHero";
export default function KontaktLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Header klass="transparent" />
        <SmallHero title="Kontakt" />
        <BannerPhone />
        <div className="container mx-auto flex flex-wrap justify-evenly">
          <Logo klas="max-h-60 md:max-h-96 w-full md:w-1/2 lg:w-1/4" />
          <div className="w-full md:w-1/2 lg:w-1/4 my-8">{children}</div>
        </div>

        <Footer />
      </body>
    </html>
  );
}

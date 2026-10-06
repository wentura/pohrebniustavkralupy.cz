import BannerPhone from "@/components/bannerPhone";
import Header from "@/components/header";
import Hero404 from "@/components/hero404";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Header />
      <Hero404 />
      <BannerPhone />
      <div className="container px-5 py-8 text-center">
        <Link href="/" className="odkaz-bila underline">
          Zpět na úvodní stránku
        </Link>
      </div>
    </div>
  );
}

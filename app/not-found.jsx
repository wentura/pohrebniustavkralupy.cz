import BannerPhone from "@/components/bannerPhone";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero404 from "@/components/hero404";
import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <Header />
      <Hero404 />
      <BannerPhone />
      <div className="container">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}

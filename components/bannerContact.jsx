import DetailContact from "./detailContact";

export default function BannerContact() {
  return (
    <section className="text-gray-600 body-font relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 ">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1275.9350672730213!2d14.307914000000002!3d50.238331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bc3897358a263%3A0x8323b0ca7736d040!2sPoh%C5%99ebn%C3%AD%20%C3%BAstav%20Cibulka%2C%20Kralupy%20nad%20Vltavou!5e0!3m2!1scs!2scz!4v1700672889353!5m2!1scs!2scz"
          style={{ filter: "grayscale(1) contrast(1) opacity(0.6)" }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-xl border-4 border-neutral-700">
          <DetailContact />
        </div>
      </div>
    </section>
  );
}

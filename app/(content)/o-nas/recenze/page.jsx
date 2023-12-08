export default function Recenze() {
  const reviews = [
    {
      text: "Když jsme se museli vypořádat s nečekanou ztrátou naší drahé osoby ,byl pro nás profesionální přístup a empatie nepostradatelné. Mohli jsme projít tímto smutným obdobím s klidem a důstojností. Ještě jednou děkujeme.",
      kdo: "Denisa T.",
    },
    {
      text: "Ještě jednou děkuji za profesionální a vstřícný přístup a vypravení důstojného pohřbu.",
      kdo: "Dagmar H.",
    },
    {
      text: "Chtěla bych moc poděkovat za Vaši skvělou práci. Citlivý přístup a podporu během mého nejtěžšího životního období. Vaše práce rozhodně není lehká, o to více si vážím Vaší vstřícnosti.",
      kdo: "Jitka H.",
    },
    {
      text: "Děkuji moc za citlivý přístup a pomoc v té nejtěžší chvíli. Opravdu profesionální, citlivé chování zaměstnanců. Děkuji moc.",
      kdo: "Stana B.",
    },
    {
      text: "Výborný přístup! Vše perfektně vysvětleno a zařízeno.",
      kdo: "Antonín H.",
    },
    {
      text: "Chtěl bych moc poděkovat za pomoc a hlavně profesionální práci kterou odvádíte.",
      kdo: "Václav V",
    },
    {
      text: "Děkuji za veškerou pomoc při organizaci pohřbu nešeho tatínka Antonína P. Perfektní komunikace od začátku až do konce a veškeré objednané položky bezchybně zajištěné. Přesně takovou pomoc člověk v tomto období potřebuje.",
      kdo: "Josef a Renáta K.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl title-font text-gray-900 mb-12 text-center font-nadpis">
          Recenze našich klientů
        </h1>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => {
            return (
              <div className="p-4 md:w-1/2 w-full" key={review.kdo}>
                <div className="h-full p-8 rounded border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">{review.text}</p>
                  <div className="w-full title-font font-medium text-gray-900 text-right">
                    {review.kdo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

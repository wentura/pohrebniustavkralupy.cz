export const menuItems = [
  {
    id: 1,
    link: "/sluzby",
    text: "Služby",
    children: [
      { id: 2, link: "/sluzby/pohrby", text: "Pohřeb s obřadem" },
      { id: 3, link: "/sluzby/pohrby#bezobradu", text: "Pohřeb bez obřadu" },
      { id: 4, link: "/sluzby/parte", text: "Smuteční oznámení" },
      {
        id: 5,
        link: "/sluzby/pohrby#organizaceobradu",
        text: "Organizace obřadu",
      },
      {
        id: 6,
        link: "/sluzby/pohrby#prevozzesnuleho",
        text: "Převoz zesnulého",
      },
      { id: 7, link: "/sluzby/hudba", text: "Smuteční hudba" },
    ],
  },

  { id: 8, link: "/pro-pozustale", text: "Informace pro pozůstalé" },
  {
    id: 9,
    link: "/katalog",
    text: "Smuteční katalog",
    children: [
      { id: 10, link: "/katalog/kvetiny", text: "Smuteční květiny a věnce" },
      {
        link: "/katalog/rakve",
        text: "Rakve",
      },
      { id: 11, link: "/katalog/urny", text: "Urny" },
      {
        id: 12,
        link: "/katalog/parteObrazky",
        text: "Obrázky na smuteční oznámení",
      },
    ],
  },
  {
    id: 13,
    link: "/o-nas",
    text: "O nás",
    children: [
      { id: 14, link: "/o-nas/pohrebni-ustav", text: "O nás" },
      { id: 15, link: "/o-nas/historie", text: "Historie ústavu" },
      { id: 16, link: "/o-nas/fotogalerie", text: "Fotogalerie" },
      { id: 17, link: "/o-nas/recenze", text: "Recenze klientů" },
    ],
  },
  { id: 18, link: "/kontakt", text: "Kontakt" },
];
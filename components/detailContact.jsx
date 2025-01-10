export default function DetailContact() {
  return (
    <div>
      <h2 className="text-modra text-xl mb-1 font-medium font-nadpis text-center underline-offset-2 underline decoration-1">
        Kralupský pohřební ústav Cibulka
      </h2>
      <p className="leading-relaxed mb-12  text-right text-xs">
        Rodinná tradice od roku 1914
      </p>
      <div className="relative flex flex-wrap flex-row-reverse justify-between text-lg">
        <div className="flex-col flex items-center">
          <a href="tel:+420723192379">+420 723 192 379</a>
          <span className="text-sm">non-stop linka</span>
        </div>
        <div className="flex-col flex items-center">
          <a href="tel:+420315726961">+420 315 726 961</a>
          <span className="text-sm">linka do kanceláře</span>
        </div>
      </div>
      <div className="relative mb-4"></div>
      {/* <div className="relative mb-4">
        <a href="mailto:info@pohrebniustavkralupy.cz">
          info@pohrebniustavkralupy.cz
        </a>
      </div> */}
      <div className="relative mb-4">
        <a href="mailto:pohrebni.ustav.cibulka@seznam.cz">
          pohrebni.ustav.cibulka@seznam.cz
        </a>
      </div>
      <div className="relative mb-4 flex gap-4">
        <a href="https://www.facebook.com/profile.php?id=61569862836577"  target="_blank">
        <img src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514127/pro_vsechny/icons8-facebook-50.png" className="w-8"/>
        </a>
        <a href="https://www.instagram.com/pohrebni_ustav_cibulka/" target="_blank">
        <img src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1736514126/pro_vsechny/icons8-instagram-50.png" className="w-8"/>
        </a>
      </div>

      <div className="relative mb-4">
        Grégrova 167/1, 278 01 Kralupy nad Vltavou
      </div>
      <div className="relative mb-4">
        Pondělí – Pátek | 8:00 - 16:00 (možná domluva)
      </div>
      <div className="relative">IČ: 66410738</div>
      <div className="relative mb-4">DIČ: CZ485803049</div>
      <div className="relative mb-4 text-sm">
        444 63 66 339 / 0800 (Česká spořitelna a.s.)
      </div>
    </div>
  );
}

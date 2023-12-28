import Logo from "./logo";
import Logo2 from "./logo2";

export default function Hero() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex  items-center justify-center flex-col mt-[-80px] hero-background">
        <div className="px-5 pt-44 pb-32 h-full">
          {/* <Logo klas="max-h-60 md:max-h-96 mx-auto" /> */}
          <Logo2 />
          {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

import ObrazkyNaParte from "@/components/obrazkyNaParte";
const moderni = [
  "Ave Maria – J. Smolík",
  "Ave Maria – L. Bílá",
  "Ave Maria – Š. Margita",
  "Až mě andělé – P. Spálený (vhodné pro muže)",
  "Bílá orchidej – Eva a Vašek",
  "Buď pořád se mnou – W. Matuška",
  "Cesta poslední – K. Černoch",
  "Čekej tiše – E. Olmerová",
  "Díky za všechno, mámo – J. Schelinger",
  "Haleluja – J. Smolík",
  "Holubí dům – J. Schelinger",
  "Hospůdko známá – Eva a Vašek",
  "Chlap, co tady chybí – Roháči",
  "Indiánská píseň lásky – F. Slováček",
  "Já budu žít navěky – M. Tučný",
  "Já se vrátím – K. Gott",
  "Jednoho dne se vrátíš – V. Špinarová",
  "Jednou je hůř, jednou je líp – J. Korn",
  "Karavana mraků – K. Kryl",
  "Kdyby sis oči vyplakala – K. Gott",
  "Když andělé pláčou – J. Smolík",
  "Když jsem já byl tenkrát kluk – K. Gott",
  "Když mne stará matka – K. Gott",
  "Kometa – J. Nohavica",
  "Kvete růže, podívej – H. Vondráčková",
  "Léta prázdnin – K. Gott",
  "Loudá se půlměsíc – M. Kubišová",
  "Máma – M. Rottrová",
  "Maminka – J. Smolík",
  "Maminko vrať se – L. Bílá",
  "Mys dobrých nadějí – H. Zagorová",
  "Nebe na zemi – J. Werich",
  "Ó mámo – P. Rezek",
  "Oči má sněhem zaváté – K. Gott",
  "Otče můj – J. Zmožek",
  "Pampelišky – Duo Červánky – country",
  "Pro mámu – Holki",
  "Sbohem lásko, nech mě jít – W. Matuška",
  "Sen lásky – Y. Simonová",
  "Slunečný hrob – Blue Effect",
  "Slunovrat – Brontosauři",
  "Slyšíš jak zvoní – Šohajka",
  "Svítá – Eva a Vašek",
  "Tam na konci světa – H. Tomm, K. Fialová",
  "Tam u nebeských bran – M. Tučný (vhodné pro muže)",
  "Táto, já vím – G. Goldová",
  "Tátovi – K. Gott",
  "Tenkrát na západě – HRANÉ",
  "Tisíckrát – Z. Jandová",
  "Už z hor, zní zvon – K. Gott",
  "V příštím životě – K. Gott – zpívaná variace na Bachův Air",
  "Veď mě dál, cesto má – P. Bobek",
  "Vincent – P. Bobek",
  "Vltava – Smetana, zpívaná verze",
  "Vzdávám dík – Eva a Vašek",
  "Závidím – N. Urbánková",
  "Always – Bon Jovi",
  "Can You Feel The Love Tonight – E. John",
  "Candle In The Wind – E. John",
  "Carrie – Europe",
  "Don’t You Cry – Guns N‘ Roses",
  "Halleluyah – L. Cohen",
  "Imagine – J. Lennon",
  "Knockin‘ On Heaven’s Door – A. Lavigne",
  "Knockin‘ On Heaven – Guns N‘ Roses",
  "Love Hurts – Nazaret",
  "Mon Dieu – E. Piaf",
  "My Oh My – Slade",
  "My Way – F. Sinatra",
  "Non Je Ne Regrette Rien – E. Piaf – (Nelituji ničeho)",
  "Nothing Else Matters – Mettalica/Apocalyptica – HRANÉ",
  "Only Time – Enya",
  "Show Must Go On – Queen",
  "Stand By Me – B. E. King",
  "Still Loving You – Scorpions",
  "The Way We Were – B. Streisand",
  "Though I’d Ring You – S.Basey, A.Delon",
  "Time To Say Goodbye – A.Bocelli",
  "What A Wonderful World – L.Armstrong",
  "Who Wants To Live Forever – Queen",
  "Wind Of Change – Scorpions",
];
const vazna = [
  "Adagio A moll z viol. Konc.- R. Schumann",
  "Air – J. S. Bach",
  "Alžbětinská serenáda – R. Binge",
  "Ave Maria – Bach – Gounod",
  "Ave Maria – F. Schubert",
  "Klavírní koncert b moll – P. I. Čajkovskij",
  "Humoreska – P. Katin",
  "Když mne stará matka – A. Dvořák",
  "Labuť – C. Saint-Saéns",
  "Largo – G. F. Händel",
  "Largo z Novosvětské – A. Dvořák",
  "Memory – Vzpomínka – K. Popper",
  "Nabucco – G. Verdi (Sbor židovských otroků)",
  "Píseň beze slov – Mendelson-Bartholdy",
  "Píseň osamělého pastýře – G. Zamfir",
  "Podzimní píseň – P. I. Čajkovskij",
  "Poem – Z. Fibich",
  "The Funeral – E. Morricone",
  "Ukolébavka – W. A. Mozart",
  "Večerní píseň – R. Schumann",
  "Vltava – B. Smetana",
  "Vzpomínka – B. Smetana",
];
const soundtrack = [
  "A Gift Of A Thistle – J. Horner (Statečné srdce)",
  "For The Love Of A Princess – J. Horner (Statečné srdce)",
  "Honor – H. Zimmer (The Pacific)",
  "I Don’t Want To Miss A Thing - Aerosmith (Armagedon)",
  "Le Professionnel – E. Morricone (Profesionál)",
  "Murron’s Burial – J. Horner (Statečné srdce)",
  "My Heart Will Go On – C. Dion (Titanic)",
  "Now We Are Free – H. Zimmer (Gladiator)",
  "Tennessee – H. Zimmer (Pearl Harbor)",
  "Time – H. Zimmer (Inception)",
];
const lidove = [
  "Ach synku synku",
  "Akáty bílé",
  "Blíž Tobě Bože můj",
  "Co jste hasiči, co jste dělali – HRANÉ",
  "Čechy krásné",
  "Do lesíčka na čekanou",
  "Dobrú noc má milá",
  "Důvěřuj se v Pána",
  "Ha ty sv. Vavřiněčku – z Chodska",
  "Bílé konvalinky – F.Soukup",
  "Lásko, bože lásko",
  "Loučení, loučení",
  "Loučím se s Vámi kamarádi",
  "Maminko, mámo",
  "Moravo, Moravo",
  "Můj táta rybářem byl",
  "Nejsmutnější loučení je s mámou",
  "Noc májová",
  "Ó řebíčku zahradnický",
  "Ó Velvary",
  "Pod tou naší starou lípou",
  "Rodné brázdy",
  "Rožnovské hodiny",
  "Široký, hluboký, ty Vltavský tůně",
  "Ta naše písnička česká",
  "Když se ten Tálinskej rybník nahání",
  "Tam v krásné Šumavě",
  "Tatíčku, starý náš",
  "Teče voda, teče – K.Gott",
  "Tichá noc, Svatá noc",
  "U studánky seděla",
  "Už mě koně vyvádějí",
  "Valčík na rozloučenou",
  "Vesničko má pod Šumavou",
  "Zahučaly hory, zahučaly lesy",
  "Zasviť mi ty slunko zlaté",
  "Zelení hájové",
];
let counter = 1;
export default function Hudba() {
  return (
    <section className="px-4">
      <div class="container px-2 sm:px-12 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-44">
          <h1 class="sm:text-3xl text-2xl font-medium font-nadpis mb-4 text-gray-900">
            Smuteční řeč
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
          <p className="text-left py-2 text-xl">
            Pro ty, kteří by rádi vzdali hold zesnulé/mu, nabízíme možnost
            profesionální řečnice, která může promluvit nejen o obecných
            tématech, ale přizpůsobit svou řeč konkrétním vztahům, studiu,
            zaměstnání nebo zálibám zemřelé/ho.
          </p>
          <p className="text-left py-2 text-xl">
            Pokud upřednostňujete, abychom my nebo ostatní z pozůstalých či
            přátel, neprojevovali kondolenci, Vaše přání budeme plně ctít.
            <br />
            Chápeme, že každý prožívá smutek a vyjadřuje soustrast různými
            způsoby.
          </p>
          <p className="text-left py-2 text-xl">
            Samozřejmostí je i tzv. církevní obřad s přítomností důstojného
            pána, kněze.
          </p>
        </div>
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium font-nadpis mb-4 text-gray-900">
            Smuteční hudba
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
          <p className="text-left py-2 text-xl">
            V těžkých chvílích, kdy se loučíte s blízkým člověkem, se snažíme
            Vám co nejvíce ulehčit organizaci pohřbu. Abychom Vám pomohli
            vytvořit osobní a důstojný obřad, nabízíme možnost přizpůsobit si
            hudbu a vzpomínkovou fotografii dle Vašich přání.
          </p>
          <p className="text-left py-2 text-xl">
            Obřad má standardní délku 30 minut, z toho 10 minut je vyhrazeno pro
            řeč. To znamená, že můžete vybrat až 5 skladeb, ale může to být
            samozřejmě méně. Poté, co vyberete hudbu z našeho seznamu skladeb,
            nás prosím kontaktujte telefonicky nebo emailem nejpozději dva dny
            před plánovaným obřadem.
          </p>
          <p className="text-left py-2 text-xl">
            V případě, že žádná ze skladeb z našeho seznamu nevyhovuje Vašim
            představám a chtěli byste vlastní hudbu, doneste nám jednotlivé
            skladby ve formátu mp3, v dobré kvalitě a bez rušivých zvuků na
            flash disku či zašlete emailem.
          </p>
        </div>
        <div class="flex flex-col text-center w-full mb-12">
          {/* <h1 class="sm:text-3xl text-2xl font-medium font-nadpis mb-4 text-gray-900">
            Verše na parte
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" /> */}
          <p>
            <h2 className="text-center md:text-left text-xl md:text-2xl pt-4 pb-2 font-obsah">
              Populární a moderní skladby
            </h2>

            <ol className="gap-2 gap-x-2 columns-1 sm:columns-2 md:columns-3 list-decimal text-left parte">
              {moderni.map((item) => {
                counter++;
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </p>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />
          <p>
            <h2 className="text-center md:text-left text-xl md:text-2xl pt-4 pb-2 font-obsah">
              Vážná hudba
            </h2>

            <ol
              className="gap-2 gap-x-2 columns-1 sm:columns-2 md:columns-3 list-decimal text-left parte"
              start={counter}
            >
              {vazna.map((item) => {
                counter++;
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </p>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />
          <p>
            <h2 className="text-center md:text-left text-xl md:text-2xl pt-4 pb-2 font-obsah">
              Soundtrack - hudba ze známých filmů
            </h2>

            <ol
              className="gap-2 gap-x-2 columns-1 sm:columns-2 md:columns-3 list-decimal text-left parte"
              start={counter}
            >
              {soundtrack.map((item) => {
                counter++;
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </p>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />
          <p>
            <h2 className="text-center md:text-left text-xl md:text-2xl pt-4 pb-2 font-obsah">
              Lidové skladby
            </h2>

            <ol
              className="gap-2 gap-x-2 columns-1 sm:columns-2 md:columns-3 list-decimal text-left parte"
              start={counter}
            >
              {lidove.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </p>
        </div>
        <div
          class="flex flex-col text-center w-full my-44 scroll-mt-44"
          id="foto"
        >
          <h1 class="sm:text-3xl text-2xl font-medium font-nadpis mb-4 text-gray-900">
            Smuteční fotografie
          </h1>
          <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:mt-2 md:mb-8 dark:bg-gray-700" />
          <p className="text-left py-2 text-xl">
            Fotografii, ve formátu A4, A3 nebo A2, můžete donést do kanceláře
            pohřebního ústavu Cibulka, nebo je přinést přímo na místo konání
            obřadu.
          </p>
          <p className="text-left py-2 text-xl">
            V případě, že se rozhodnete přinést fotografii přímo k obřadu,
            prosíme Vás, abyste nám tuto informaci předem sdělili. Fotografie
            nemusí být v rámečku.
          </p>
          <p className="text-left py-2 text-xl">
            Chápeme, že každé rozloučení je jedinečné, a proto se s Vámi snažíme
            spolupracovat a přizpůsobit se Vašim potřebám.
          </p>
          <p className="text-left py-2 text-xl">
            S námi můžete mít jistotu, že Vaše přání budou respektována a
            poslední rozloučení se bude odehrávat tak, jak by si to Váš zesnulý
            člen rodiny přál.
          </p>
          <p className="text-left py-2 text-xl">
            Děkujeme Vám za důvěru. S úctou, kolektiv Pohřebního ústavu Cibulka
          </p>
        </div>
      </div>
      {/* <ObrazkyNaParte /> */}
    </section>
  );
}

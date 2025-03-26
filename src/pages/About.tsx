
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>O nas - NeoBags</title>
        <meta
          name="description"
          content="Poznaj naszą historię i wartości. NeoBags tworzy eleganckie torby na laptopy dla biznes women."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 page-transition">
        <section className="py-12 md:py-20 bg-neobags-cream/60">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <span className="inline-block mb-3 px-4 py-1 bg-white text-neobags-charcoal rounded-full text-sm font-medium">
                Nasza historia
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6">
                O NeoBags
              </h1>
              <p className="text-lg text-gray-700">
                Poznaj naszą markę i filozofię, która stoi za każdą torbą, którą tworzymy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose lg:prose-lg mx-auto">
                <p>
                  Witaj w naszym sklepie internetowym – przestrzeni, w której pasja do elegancji
                  spotyka się z funkcjonalnością, a każdy produkt jest stworzony z myślą o
                  nowoczesnych, pewnych siebie kobietach, które cenią zarówno styl, jak i wygodę.
                  Nasza oferta to wyjątkowe torby na laptopy, które idealnie wpisują się w potrzeby
                  polskich biznes women. Projektujemy nasze torby z najwyższej jakości materiałów,
                  aby zapewnić Ci doskonałą ochronę Twojego sprzętu, a jednocześnie dodać charakteru
                  i klasy do Twojego codziennego wyglądu.
                </p>

                <h2>Nasze materiały</h2>

                <h3>Torby z skóry saffiano</h3>
                <p>
                  Skóra saffiano to materiał, który doskonale łączy elegancję z funkcjonalnością.
                  Jest trwała, odporna na zarysowania i wodoodporna, co sprawia, że nasze torby z
                  tej skóry są idealnym wyborem dla kobiet ceniących wysoką jakość i elegancki
                  wygląd. Każda torba z kolekcji saffiano ma subtelną fakturę, która z biegiem czasu
                  staje się jeszcze bardziej charakterystyczna, dodając Twojemu stylowi szlachetności.
                  Nasze torby z tego materiału doskonale komponują się z zarówno formalnymi, jak i
                  casualowymi stylizacjami, stając się niezbędnym elementem Twojego biznesowego wizerunku.
                </p>

                <h3>Torby z ekoskóry</h3>
                <p>
                  Dla kobiet, które szukają luksusu w zgodzie z naturą, oferujemy torby z wysokiej
                  jakości ekoskóry. Są one doskonałą alternatywą dla tradycyjnych skórzanych
                  produktów, łącząc nowoczesny design z ekologicznym podejściem. Nasze torby z
                  ekoskóry są lekkie, odporne na uszkodzenia i łatwe do utrzymania w czystości. Bez
                  względu na to, czy jesteś na spotkaniu z klientem, czy w drodze na konferencję,
                  torba z ekoskóry zapewni Ci wyjątkowy wygląd oraz niezrównaną trwałość.
                </p>

                <h3>Torby z zamszu</h3>
                <p>
                  Zamsz to materiał, który kojarzy się z luksusem i elegancją. Nasze torby z zamszu
                  są miękkie w dotyku, a jednocześnie wystarczająco wytrzymałe, by chronić Twój
                  laptop przed uszkodzeniami. Zamsz nadaje torbom wyjątkowego charakteru, a ich
                  subtelna struktura sprawia, że stają się one idealnym dodatkiem do codziennego
                  stroju, zarówno w pracy, jak i w czasie spotkań towarzyskich. Torby z zamszu łączą
                  w sobie funkcjonalność z ponadczasowym stylem, dlatego będą towarzyszyć Ci przez
                  wiele lat, stając się eleganckim symbolem Twojego profesjonalizmu.
                </p>

                <h3>Torby z sztruksu</h3>
                <p>
                  Sztruks to materiał, który zdobywa coraz większą popularność w modzie luksusowej.
                  Jego ciepła faktura, delikatny połysk i subtelny charakter sprawiają, że torby z
                  sztruksu są idealnym wyborem dla kobiet, które cenią unikalne i modne rozwiązania.
                  Sztruksowe torby z naszej kolekcji są nie tylko stylowe, ale również funkcjonalne –
                  zapewniają przestronność i wygodę noszenia, a jednocześnie chronią Twój laptop
                  przed uszkodzeniami. Dzięki sztruksowi każda torba nabiera charakteru i staje się
                  wyjątkowym akcentem Twojego wizerunku.
                </p>

                <h3>Torby pikowane z poliestru</h3>
                <p>
                  Dla kobiet, które oczekują nowoczesnych rozwiązań i najwyższej jakości, oferujemy
                  torby wykonane z pikowanego poliestru. Ten materiał łączy lekkość z wytrzymałością,
                  zapewniając idealną ochronę dla Twojego laptopa, a jednocześnie oferuje elegancki,
                  nowoczesny wygląd. Pikowane torby wyróżniają się subtelną fakturą, która nadaje im
                  wyjątkowego charakteru i sprawia, że stają się doskonałym wyborem na różnorodne
                  okazje. Nasze torby z poliestru są łatwe w utrzymaniu, odporne na zabrudzenia i
                  oferują przestronność, dzięki czemu możesz przechować wszystkie niezbędne akcesoria
                  w jednym miejscu.
                </p>

                <h2>Dlaczego nasze torby?</h2>
                <p>
                  Nasze torby to synonim luksusu, jakości i praktyczności. Projektujemy je z myślą o
                  kobietach, które łączą karierę zawodową z życiem prywatnym, dlatego każda torba
                  jest funkcjonalna, a jednocześnie elegancka. Dzięki wyborowi różnych materiałów –
                  od luksusowej skóry saffiano, przez nowoczesną ekoskórę, zamsz, sztruks, aż po
                  pikowany poliester – oferujemy torby, które idealnie pasują do każdego stylu i
                  okazji.
                </p>
                <p>
                  Niezależnie od tego, czy potrzebujesz torby do pracy, na spotkania biznesowe, czy
                  codziennego użytkowania – w naszej ofercie znajdziesz produkt, który będzie
                  doskonale odpowiadał Twoim potrzebom, a także podkreśli Twój profesjonalizm i
                  unikalny styl.
                </p>
                <p>
                  Zapraszamy do odkrywania naszych kolekcji i wyboru torby, która stanie się Twoim
                  niezastąpionym towarzyszem w każdej sytuacji.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neobags-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-8">Odkryj naszą kolekcję</h2>
              <a href="/products" className="btn-primary">
                Zobacz nasze torby
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;

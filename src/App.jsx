import "./App.css";
import imgStoryBg from "./assets/story-bg.png";
import sections from "./content/story";
import Header from "./Header";
import SectionLeading from "./sections/SectionLeading";
import SectionQuote from "./sections/SectionQuote";
import Sections from "./sections/SectionBody";
import BannerParallaxed from "./sections/BannerParallaxed";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="w-full bg-slate-50"
      style={{
        "--primary-color": "#D05800",
        "--secondary-color": "#5C5646",
      }}
    >
      <Header />
      {/* Content container */}
      <div className="flex flex-col gap-8 pb-12">
        {/* Quote */}
        <SectionLeading />
        <SectionQuote />

        <Sections sections={sections} childrenInjectedAfter={0}>
          <BannerParallaxed imgSrc={imgStoryBg} />
        </Sections>
      </div>
      <Footer />
    </div>
  );
}

export default App;

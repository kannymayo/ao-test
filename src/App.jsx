import "./App.css";
import sections from "./content/story";
import Header from "./Header";
import SectionLeading from "./sections/SectionLeading";
import SectionQuote from "./sections/SectionQuote";
import Sections from "./sections/SectionBody";

function App() {
  return (
    <div className="w-full bg-slate-50">
      <Header />
      {/* Content container */}
      <div className="flex flex-col gap-8">
        {/* Quote */}
        <SectionLeading />
        <SectionQuote />

        <Sections sections={sections} childrenInjectedAfter={0}></Sections>
      </div>
    </div>
  );
}

export default App;

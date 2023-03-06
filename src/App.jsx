import "./App.css";
import imgHeroDesktop from "./assets/hero-desktop.png";
import imgLogoClient from "./assets/logo-client.png";
import imgLogoAsiaOne from "./assets/logo-asiaone.png";
import imgIconWhatsapp from "./assets/icon-whatsapp.png";
import imgIconFacebook from "./assets/icon-facebook.png";
import imgIconTwitter from "./assets/icon-twitter.png";
import imgStoryAvatar from "./assets/story-avatar.png";
import imgIconQuote from "./assets/icon-quote.png";

import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  return (
    <div className="w-full bg-slate-50">
      {/* header container */}
      <div
        style={{
          backgroundImage: `url(${imgHeroDesktop})`,
          backgroundSize: "cover",
        }}
        className="h-[50vh] relative flex items-center justify-center flex-col gap-6 border-b-8 border-zinc-200"
      >
        {/* AsiaOne logo */}
        <div className="absolute top-2 left-2 w-12">
          <img src={imgLogoAsiaOne} alt="logo-asiaone" />
        </div>

        {/* Nav Menu */}
        <div className="absolute top-3 right-6 cursor-pointer">
          <RxHamburgerMenu className="text-slate-600" size="2.2em" />
        </div>

        {/* Logo */}
        <div className="w-26">
          <img src={imgLogoClient} alt="logo-client" />
        </div>
        {/* hero text */}
        <div className="text-white text-6xl drop-shadow-md font-bold uppercase">
          Stories of freedom
        </div>
      </div>

      {/* Content container */}
      <div className="flex flex-col gap-8">
        <section className="mx-64 p-4 pt-8 gap-10 flex flex-col">
          <div className="flex justify-center gap-2 w-full">
            <a href="" className="">
              <img className="w-6" src={imgIconWhatsapp} alt="whatsapp" />
            </a>
            <a href="" className="">
              <img className="w-6" src={imgIconFacebook} alt="facebook" />
            </a>
            <a href="" className="">
              <img className="w-6" src={imgIconTwitter} alt="twitter" />
            </a>
          </div>
          <div className="text-center text-yellow-800 font-bold text-xl px-10">
            Harley-Davidson riders on how motorcycles helped them find their
            purpose
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Motorcycle groups are not just about fun and speed — for these two
              bikers, it's more about freedom and camaraderie.
            </p>
            <p>
              From raising money for charity to exploring untouched
              destinations, Yanisa, 43, and Mick, who is in his 50s, have had
              some epic adventures with their riding buddies and, of course,
              their trusty Harley-Davidson motorcycles.
            </p>
            <p>
              Their inspirational stories came to light during Harley-Davidson's
              #HDFreedomStoriesAsia crowdsourcing campaign last July and August,
              which called for contributions from riders around the region.
            </p>
            <p>
              Speaking to AsiaOne, the two Thai riders delve deeper into their
              hobby, which has now turned into a way of life.
            </p>
          </div>
        </section>
        {/* Quote */}
        <section className="mx-64">
          {/* Heading */}
          <div className="flex justify-center items-center mx-12 gap-1">
            <div className="shrink-0">
              <img src={imgStoryAvatar} alt="story-avatar" className="w-28" />
            </div>
            <div className="self-start shrink-0">
              <img src={imgIconQuote} alt="" className="w-10" />
            </div>
            <span className="uppercase font-bold text-lg leading-5 text-yellow-800">
              I have always dreamed that if I could afford a nice motorcycle one
              day, it would be a Harley-Davidson
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

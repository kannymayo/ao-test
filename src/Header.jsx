import { RxHamburgerMenu } from "react-icons/rx";
import imgHeroDesktop from "./assets/hero-desktop.png";
import imgLogoClient from "./assets/logo-client.png";
import imgLogoAsiaOne from "./assets/logo-asiaone.png";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${imgHeroDesktop})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
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
        <img
          style={{
            filter: "drop-shadow(0px 0px 3px rgb(0 0 0 /100%))",
          }}
          src={imgLogoClient}
          alt="logo-client"
        />
      </div>
      {/* hero text */}
      <div
        style={{
          filter: "drop-shadow(2px 2px 3px rgb(0 0 0 /65%))",
        }}
        className="text-white text-6xl font-bold uppercase"
      >
        Stories of freedom
      </div>
    </header>
  );
}

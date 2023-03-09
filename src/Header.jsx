import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import imgHeroDesktop from "./assets/hero-desktop.png";
import imgLogoClient from "./assets/logo-client.png";
import imgLogoAsiaOne from "./assets/logo-asiaone.png";
import Menu from "./Menu";
import story from "./content/story";

export default function Header() {
  const ref = useRef();
  const headings = story.map((section, idx) => ({
    text: section.title,
    link: `#section-${idx}`,
  }));
  return (
    <>
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
          <RxHamburgerMenu
            onClick={handleOpenMenu}
            className="text-slate-600"
            size="2.2em"
          />
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
          className="text-white lg:text-6xl md:text-3xl text-xl font-bold uppercase"
        >
          Stories of freedom
        </div>
      </header>
      <Menu ref={ref}>
        <div className="text-2xl  text-white flex flex-col items-stretch justify-center h-full w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
          {headings.map((heading) => (
            <a
              onClick={handleCloseMenu}
              className="text-left after:border after:block after:my-8 lg:after:my-12 last:after:content-none"
              key={heading.text}
              href={heading.link}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </Menu>
    </>
  );

  function handleOpenMenu() {
    ref.current.openMenu();
  }
  function handleCloseMenu() {
    ref.current.closeMenu();
  }
}

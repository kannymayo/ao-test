import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "./hooks/useMediaQuery";
import imgHeroDesktop from "./assets/hero-desktop.png";
import imgLogoClient from "./assets/logo-client.svg";
import imgLogoAsiaOne from "./assets/logo-asiaone.png";
import Menu from "./Menu";
import story from "./content/story";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const refMenu = useRef();
  const headings = story.map((section, idx) => ({
    text: section.title,
    link: `#section-${idx}`,
  }));
  const refScrollTarget = useRef();
  const { scrollYProgress: p } = useScroll({
    target: refScrollTarget,
    offset: ["start start", "end start"],
  });
  const scrollPercent = useTransform(p, [0, 1], [0, 100]);
  const scrollPercentMobile = useTransform(p, [0.25, 1], [20, 40]);
  const backgroundPosition = useMotionTemplate`50% ${scrollPercent}%`;
  const backgroundPositionMobile = useMotionTemplate`${scrollPercentMobile}% 50%`;

  return (
    <>
      <motion.header
        ref={refScrollTarget}
        style={{
          backgroundImage: `url(${imgHeroDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: isMobile
            ? backgroundPositionMobile
            : backgroundPosition,
        }}
        className="sm:h-[50lvh] h-[100lvh] box-content min-h-[20rem]  relative flex items-center justify-center flex-col gap-6 border-b-8 border-[var(--hero-border-color)]"
      >
        {/* AsiaOne logo */}
        <div className="absolute top-2 left-2 w-12">
          <img src={imgLogoAsiaOne} alt="logo-asiaone" />
        </div>

        {/* Nav Menu */}
        <a
          style={{
            mixBlendMode: "difference",
          }}
          onClick={handleOpenMenu}
          className="fixed top-3 right-6 cursor-pointer z-40"
        >
          <RxHamburgerMenu className="text-slate-50" size="2.2em" />
        </a>

        {/* Logo */}
        <div className="w-26 md:w-32">
          <img
            style={{
              filter: "drop-shadow(0px 0px 3px rgb(0 0 0 /100%))",
            }}
            src={imgLogoClient}
            className="object-contain w-full h-full"
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
      </motion.header>
      <Menu ref={refMenu}>
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
    refMenu.current.openMenu();
  }
  function handleCloseMenu() {
    refMenu.current.closeMenu();
  }
}

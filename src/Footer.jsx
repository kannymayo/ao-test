import logoAsiaOneFlat from "./assets/logo-asiaone-flat.svg";
import logoAsiaOneFragment from "./assets/logo-asiaone-fragment.svg";
import logoClientFragment from "./assets/logo-client-fragment.png";
import logoClient from "./assets/logo-client.svg";

export default function Footer() {
  const links = [
    "About Us",
    "Advertise With Us",
    "Work With Us",
    "Privacy Statement",
  ];
  return (
    <footer>
      {/* Closing Banner */}
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain, 30%",
          backgroundBlendMode: "normal",
          backgroundPosition: "right center, left center",
        }}
        className="bg-[var(--primary-color)] relative text-white flex flex-col items-center justify-center py-6 font-bold text-lg gap-4 tracking-wider px-16"
      >
        {/* Logo fragment AsiaOne, align right > md, center otherwise */}
        <img
          src={logoAsiaOneFragment}
          alt="background-logofragment-asiaone"
          // height 200% then scale down to flatten
          className="absolute object-cover md:right-0 md:object-contain md:w-full md:object-right h-full md:h-[200%] md:scale-y-50"
        />
        {/* Logo fragment Client, align left > md, hidden otherwise */}
        <img
          src={logoClientFragment}
          alt="background-logofragment-client"
          className="absolute md:left-0 md:object-contain md:h-full md:w-full md:object-left hidden md:block"
        />
        {/* Logo Client, shown only < md */}
        <img
          src={logoClient}
          alt=""
          className="absolute right-4 bottom-4 w-10 md:hidden"
        />
        <span className="max-w-[20em] text-center relative z-20">
          To know more about Harley-Davidson motorcycles and products
        </span>
        <button className="bg-[var(--secondary-color)] py-1.5 px-5 rounded-md hover:brightness-110 focus:brightness-110 active:scale-105 transition-all relative z-20">
          Click Here
        </button>
      </div>
      {/* Site Footer */}
      <div className="bg-black pt-12 pb-6 text-[var(--primary-color)] flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div className="text-4xl text-white">
          <img src={logoAsiaOneFlat} alt="" className="" />
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-0">
          {links.map((item) => (
            <a
              key={item}
              // separator between links
              className="sm:after:border sm:after:mx-6 sm:after:inline-block sm:after:h-1/2 sm:last:after:content-none"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Legal */}
        <div className="flex gap-0.5 text-xs font-semibold tracking-wide">
          <a href="#">@asiaone 2023</a>
          <span className="text-white">
            Company Registration No.: 201815023K
          </span>
        </div>
      </div>
    </footer>
  );
}

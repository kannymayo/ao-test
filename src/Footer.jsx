import { Fragment } from "react";
import logo from "./assets/logo-asiaone-flat.svg";

export default function Footer() {
  const links = [
    "About Us",
    "Advertise With Us",
    "Work With Us",
    "Privacy Statement",
  ];
  return (
    <footer>
      <div className="bg-[var(--primary-color)] text-white flex flex-col items-center justify-center py-6 font-bold text-lg gap-4 tracking-wider">
        <span className="w-[20em] text-center">
          To know more about Harley-Davidson motorcycles and products
        </span>
        <button className="bg-[var(--secondary-color)] py-1.5 px-5 rounded-md hover:brightness-110 focus:brightness-110 active:scale-105 transition-all">
          Click Here
        </button>
      </div>
      <div className="bg-black pt-12 pb-6 text-[var(--primary-color)] flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div className="text-4xl text-white">
          <img src={logo} alt="" className="" />
        </div>
        {/* Links */}
        <div className="flex">
          {links.map((item, idx) => (
            <Fragment key={item}>
              {/* leading separator for non-first */}
              {idx !== 0 && <div className="border border-white my-1.5"></div>}
              <span className="px-6">{item}</span>
            </Fragment>
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

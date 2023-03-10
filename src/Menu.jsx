import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { RxCross1 } from "react-icons/rx";

function Menu({ children }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openMenu: () => setIsOpen(true),
    closeMenu: () => setIsOpen(false),
  }));

  // disable scroll when menu is open, and compensate for scrollbar width
  useEffect(() => {
    if (isOpen) {
      // set padding equal to scrollbar width
      document.body.style.paddingRight = `${
        window.innerWidth - document.body.clientWidth
      }px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = 0;
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = 0;
    };
  }, [isOpen]);

  return (
    <div
      className={`animate-backdrop pointer-events-auto fixed inset-0 z-40 bg-stone-900 opacity-90 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <a
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <RxCross1 className="fixed cursor-pointer hover:scale-105 hover:text-white text-6xl right-11 top-6 text-slate-200 transition-all duration-500" />
      </a>
      {children}
    </div>
  );
}

export default forwardRef(Menu);

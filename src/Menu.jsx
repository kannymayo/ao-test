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
      className={`animate-backdrop pointer-events-auto fixed inset-0 bg-stone-900 opacity-90 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <RxCross1
        onClick={() => {
          setIsOpen(false);
        }}
        className="fixed cursor-pointer hover:scale-105 hover:text-white text-4xl right-11 top-4 text-slate-200 transition-all duration-500"
      />
      {children}
    </div>
  );
}

export default forwardRef(Menu);

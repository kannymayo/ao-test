import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { RxCross1 } from "react-icons/rx";

function Menu(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openMenu: () => setIsOpen(true),
  }));
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
    </div>
  );
}

export default forwardRef(Menu);

import { CiShoppingBasket } from "react-icons/ci";
import BasketContent from "./BasketContent";
import { useState } from "react";

function Basket() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className="bg-sadrtell relative flex h-[80%] items-center justify-between gap-4 rounded-4xl px-1"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <CiShoppingBasket className="rounded-full bg-white" size="35px" />
      <p dir="rtl" className="pl-2 text-white">
        0 تومان
      </p>

      <div
        dir="rtl"
        className="light-shadow absolute top-0 left-0 flex translate-x-[-20%] translate-y-[-10%] rounded-full"
      >
        <p className="flex size-4 items-center justify-center rounded-full bg-white text-center text-[14px]">
          X
        </p>
      </div>
      {showContent && (
        <div className="absolute top-[70%] h-20 w-full bg-transparent"></div>
      )}
      {showContent && (
        <div className="animate-fade-up absolute top-[100%] left-0 rounded-2xl bg-white">
          <BasketContent />
        </div>
      )}
    </div>
  );
}

export default Basket;

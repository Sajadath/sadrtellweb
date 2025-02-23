import { useState } from "react";
import AfterSellServices from "./AfterSellServices";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import GuaranteeCategory from "./GuaranteeCategory";
import { useHideOrUnhide } from "../../hooks/useHideOrUnhide";

function NavbarNavigation() {
  const toggleHider = useHideOrUnhide();

  const [showCategory, setShowCategory] = useState(false);
  const [showGuaranteeCategory, setShowGuaranteeCategory] = useState(false);
  const [hoverMenu1, setHoverMenu1] = useState(false);
  const [hoverMenu2, setHoverMenu2] = useState(false);
  const [hoverMenu3, setHoverMenu3] = useState(false);
  const [hoverMenu4, setHoverMenu4] = useState(false);
  const [hoverMenu5, setHoverMenu5] = useState(false);
  const [hoverMenu6, setHoverMenu6] = useState(false);

  return (
    <div className="flex h-full gap-10 pr-5">
      <div
        onMouseEnter={() => setHoverMenu1(true)}
        onMouseLeave={() => setHoverMenu1(false)}
        className="relative flex items-center justify-center"
      >
        <a href="/" className="block">
          صفحه اصلی
        </a>
        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu1 ? "scale-100" : "scale-0"}`}
        ></div>
      </div>
      <div
        onMouseEnter={() => {
          setShowCategory(true);
          setHoverMenu2(true);
          toggleHider("hide");
        }}
        onMouseLeave={() => {
          setShowCategory(false);
          setHoverMenu2(false);
          toggleHider("show");
        }}
        className="relative flex h-full items-center justify-center gap-2"
      >
        <h3>خدمات پس از فروش</h3>
        {!showCategory ? <HiOutlineChevronDown /> : <HiChevronUp />}
        {showCategory && (
          <div className="absolute top-[70%] h-15 w-full bg-transparent"></div>
        )}

        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu2 ? "scale-100" : "scale-0"}`}
        ></div>
        {showCategory && <AfterSellServices />}
      </div>

      <div
        onMouseEnter={() => {
          setHoverMenu3(true);
          setShowGuaranteeCategory(true);
          toggleHider("hide");
        }}
        onMouseLeave={() => {
          setHoverMenu3(false);
          setShowGuaranteeCategory(false);
          toggleHider("show");
        }}
        className="relative flex items-center justify-center gap-2"
      >
        <h3>گارانتی صدرتل</h3>
        {!showGuaranteeCategory ? <HiOutlineChevronDown /> : <HiChevronUp />}
        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu3 ? "scale-100" : "scale-0"}`}
        ></div>
        {showGuaranteeCategory && (
          <div className="absolute top-[70%] h-20 w-full bg-transparent"></div>
        )}
        {showGuaranteeCategory && (
          <div className="animate-fade-up absolute top-[100%] -right-2 w-fit rounded-2xl bg-white">
            <GuaranteeCategory />
          </div>
        )}
      </div>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHoverMenu4(true)}
        onMouseLeave={() => setHoverMenu4(false)}
      >
        <a className="block" href="/about-us">
          درباره ما
        </a>
        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu4 ? "scale-100" : "scale-0"}`}
        ></div>
      </div>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHoverMenu5(true)}
        onMouseLeave={() => setHoverMenu5(false)}
      >
        <a className="block" href="/contact-us">
          تماس با ما
        </a>
        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu5 ? "scale-100" : "scale-0"}`}
        ></div>
      </div>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHoverMenu6(true)}
        onMouseLeave={() => setHoverMenu6(false)}
      >
        <a className="block" href="#">
          پیگیری سفارش
        </a>
        <div
          className={`bg-sadrtell absolute bottom-0 h-1 w-full transition-all duration-300 ${hoverMenu6 ? "scale-100" : "scale-0"}`}
        ></div>
      </div>
    </div>
  );
}

export default NavbarNavigation;

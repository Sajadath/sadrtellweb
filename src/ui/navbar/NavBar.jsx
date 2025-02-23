import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import AccountCenter from "./AccountCenter";
import NavbarNavigation from "./NavbarNavigation";
import Basket from "./Basket/Basket";

function NavBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 60; // Navbar height in pixels

      if (currentScrollY > lastScrollY && currentScrollY > navbarHeight * 2) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-navbar sticky top-0 z-50 hidden h-[60px] items-center justify-around transition-transform duration-500 ease-in-out lg:flex ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      dir="rtl"
    >
      <Categories />
      <NavbarNavigation />
      <AccountCenter />
      <Basket />
    </div>
  );
}

export default NavBar;

import Categories from "../Categories/Categories";
import AccountCenter from "./AccountCenter";
import NavbarNavigation from "./NavbarNavigation";

function NavBar() {
  return (
    <div
      className="bg-navbar sticky top-0 z-50 flex h-[60px] items-center gap-9"
      dir="rtl"
    >
      <Categories />
      <NavbarNavigation />

      <AccountCenter />
    </div>
  );
}

export default NavBar;

import Categories from "../Categories/Categories";
import NavbarNavigation from "./NavbarNavigation";

function NavBar() {
  return (
    <div className="sticky top-0 flex bg-blue-200" dir="rtl">
      <Categories />
      <NavbarNavigation />
    </div>
  );
}

export default NavBar;

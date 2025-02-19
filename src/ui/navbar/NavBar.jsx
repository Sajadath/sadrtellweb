import Categories from "../Categories/Categories";
import NavbarNavigation from "./NavbarNavigation";

function NavBar() {
  return (
    <div className="flex bg-blue-200">
      <Categories />
      <NavbarNavigation />
    </div>
  );
}

export default NavBar;

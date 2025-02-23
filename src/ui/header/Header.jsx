import SearchInput from "./search input/SearchInput";
import SadrtellIcon from "./SadrtellIcon";
import ContactUs from "./contact us/ContactUs";
import NavBar from "../navbar/NavBar";

function Header() {
  return (
    <>
      <header dir="rtl">
        <div className="mx-10 flex items-center justify-around bg-white py-3">
          <SadrtellIcon />
          <SearchInput />
          <ContactUs />
        </div>
      </header>
      <NavBar />
    </>
  );
}

export default Header;

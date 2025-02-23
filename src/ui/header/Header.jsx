import SearchInput from "./search input/SearchInput";

import ContactUs from "./contact us/ContactUs";
import NavBar from "../navbar/NavBar";
import HeaderSearchInput from "./HeaderSearchInput";

function Header() {
  return (
    <>
      <header dir="rtl">
        <div className="sm:mx-10 sm:flex sm:items-center sm:justify-around sm:bg-white sm:py-3">
          {/* <SadrtellIcon /> */}
          <SearchInput />
          <ContactUs />
        </div>
      </header>

      <NavBar />
      <div className="bg-navbar flex w-full items-center justify-center lg:hidden">
        <HeaderSearchInput />
      </div>
    </>
  );
}

export default Header;

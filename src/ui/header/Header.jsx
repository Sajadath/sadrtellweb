import SearchInput from "./search input/SearchInput";
import SadrtellIcon from "./SadrtellIcon";
import ContactUs from "./contact us/ContactUs";
function Header() {
  return (
    <header>
      <div className="mx-10 flex items-center justify-around bg-white py-4.5">
        <ContactUs />
        <SearchInput />
        <SadrtellIcon />
      </div>
      <div className="bg-blue-200">part 2</div>
    </header>
  );
}

export default Header;

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import sadrtellIcon from "../../../Data/sadrtellfinalpng-2048x870.png";
function SearchInput() {
  return (
    <>
      <div className="flex justify-center">
        <a href="/">
          <img className="w-40 sm:w-45 md:w-45" src={sadrtellIcon} alt="" />
        </a>
      </div>
      <div dir="rtl" className="hidden lg:relative lg:flex lg:h-fit lg:w-[60%]">
        <input
          className="sm:w-full sm:rounded-2xl sm:border sm:border-gray-300 sm:py-2 sm:pr-3 sm:focus:outline-none"
          type="search"
          name="search-input-header"
          id=""
          placeholder="جستجوی محصولات"
        />
        <button
          className="absolute top-[50%] left-2 flex size-7 translate-y-[-50%] items-center justify-center rounded-4xl bg-blue-900"
          type="submit"
        >
          <HiMiniMagnifyingGlass color="white" />
        </button>
      </div>
    </>
  );
}

export default SearchInput;

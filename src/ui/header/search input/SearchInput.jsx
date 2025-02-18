import { HiMiniMagnifyingGlass } from "react-icons/hi2";
function SearchInput() {
  return (
    <div dir="rtl" className="relative flex h-fit w-[60%]">
      <input
        className="w-full rounded-2xl border border-gray-300 py-2 pr-3 focus:outline-none"
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
  );
}

export default SearchInput;

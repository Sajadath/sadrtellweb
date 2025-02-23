import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function HeaderSearchInput() {
  return (
    <div dir="rtl" className="relative py-2">
      <input
        className="rounded-3xl bg-white px-19 py-1 sm:w-full sm:rounded-2xl sm:border sm:border-gray-300 sm:py-2 sm:pr-3 sm:focus:outline-none"
        type="search"
        name="search-input-header"
        id=""
        placeholder="جستجوی محصولات"
      />
      <button
        className="absolute top-[50%] left-1 flex size-5 -translate-y-[50%] items-center justify-center rounded-4xl bg-blue-900 sm:size-7"
        type="submit"
      >
        <HiMiniMagnifyingGlass color="white" />
      </button>
    </div>
  );
}

export default HeaderSearchInput;

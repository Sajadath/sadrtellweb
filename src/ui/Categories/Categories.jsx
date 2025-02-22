import { useState } from "react";
import CategoryLabel from "./CategoryLabel";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

import { categoryMenu } from "../../Data/categoryMenu";
function Categories() {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowCategory(true)}
      onMouseLeave={() => setShowCategory(false)}
      onClick={() => setShowCategory(false)}
      className="bg-sadrtell relative z-50 mr-15 h-[100%] w-[15%] rounded-t-2xl border"
    >
      <h3 className="flex items-center justify-around py-4 text-center text-white">
        <HiOutlineBars3 /> دسته بندی کالاها
        <span className="pr-15">
          <HiOutlineChevronDown />
        </span>
        <div className="absolute top-[70%] h-15 w-full bg-transparent"></div>
      </h3>
      {showCategory && (
        <>
          <div className="animate-fade-up absolute top-[100%] z-50 h-fit w-full rounded-b-xl bg-white">
            <ul>
              {categoryMenu.map((category, index) => (
                <CategoryLabel category={category} key={index}>
                  <HiChevronLeft />
                </CategoryLabel>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Categories;

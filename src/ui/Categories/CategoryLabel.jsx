import { useState } from "react";
import CategoryChildren from "./CategoryChildren";

function CategoryLabel({ category, children, lastCategoryIndex, index }) {
  const [showCategory, setShowCategory] = useState(false);
  const nestedChildren = category.children;
  const nestedChildrenLastIndex = nestedChildren.length - 1;
  return (
    <li>
      <div
        onMouseEnter={() => setShowCategory(true)}
        onMouseLeave={() => setShowCategory(false)}
        className={`hover:bg-sadrtell relative flex items-center justify-between py-2 pr-3 text-center text-black hover:text-white ${index === lastCategoryIndex && "rounded-b-xl"}`}
      >
        <p>{category.label}</p>
        {children}
        {showCategory && (
          <>
            <div className="absolute top-0 right-[100%] h-fit w-40 rounded-xl bg-white">
              <ul>
                {nestedChildren.map((child, index) => (
                  <CategoryChildren
                    child={child}
                    key={index}
                    index={index}
                    lastIndex={nestedChildrenLastIndex}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default CategoryLabel;

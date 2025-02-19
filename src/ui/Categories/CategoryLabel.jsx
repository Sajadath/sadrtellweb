import { useState } from "react";
import CategoryChildren from "./CategoryChildren";

function CategoryLabel({ category, children }) {
  const [showCategory, setShowCategory] = useState(false);
  const nestedChildren = category.children;
  console.log(children);
  return (
    <li>
      <div
        onMouseEnter={() => setShowCategory(true)}
        onMouseLeave={() => setShowCategory(false)}
        className="relative flex items-center justify-between py-2 pr-3 text-center hover:bg-neutral-300"
      >
        <p>{category.label}</p>
        {children}
        {showCategory && (
          <>
            <div className="absolute top-0 right-[100%] h-fit w-40 rounded-xl">
              <ul>
                {nestedChildren.map((child, index) => (
                  <CategoryChildren child={child} key={index} />
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

function CategoryChildren({ child, index, lastIndex }) {
  return (
    <div
      className={`hover:bg-sadrtell py-2 text-black hover:text-white ${index === 0 && "rounded-t-xl"} ${index === lastIndex && "rounded-b-xl"}`}
    >
      <li>
        <a className="block" href={child.link}>
          {child.label}
        </a>
      </li>
    </div>
  );
}

export default CategoryChildren;

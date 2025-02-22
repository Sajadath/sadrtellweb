function CategoryChildren({ child }) {
  return (
    <div className="hover:bg-sadrtell py-2 text-black hover:text-white">
      <li>
        <a className="block" href={child.link}>
          {child.label}
        </a>
      </li>
    </div>
  );
}

export default CategoryChildren;

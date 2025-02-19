function CategoryChildren({ child }) {
  return (
    <div className="py-1.5 hover:bg-neutral-300">
      <li>
        <a href={child.link}>{child.label}</a>
      </li>
    </div>
  );
}

export default CategoryChildren;

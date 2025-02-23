import { guaranteeMenu } from "../../Data/guaranteeMenu";
function GuaranteeCategory() {
  const lastChild = guaranteeMenu.length - 1;
  return (
    <ul>
      {guaranteeMenu.map((ce, index) => (
        <li key={index}>
          <a
            className={`hover:bg-sadrtell block min-w-50 px-3 py-1.5 hover:text-white ${index === 0 && "rounded-t-2xl"} ${index === lastChild && "rounded-b-2xl"}`}
            href={ce.link}
          >
            {ce.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GuaranteeCategory;

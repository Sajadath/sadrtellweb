import { guaranteeMenu } from "../../Data/guaranteeMenu";
function GuaranteeCategory() {
  return (
    <ul>
      {guaranteeMenu.map((ce, index) => (
        <li key={index}>
          <a
            className="hover:bg-sadrtell block min-w-50 px-3 py-1.5 hover:text-white"
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

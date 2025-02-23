import { SlBasket } from "react-icons/sl";

function EmptyBasket() {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 px-4 pt-5">
        <p className="text-nowrap">در حال حاظر سبد خرید شما خالی است</p>
        <SlBasket size="30px" />
      </div>

      <div className="flex justify-center py-4">
        <a className="block bg-sky-400 px-7 text-nowrap text-white" href="/">
          بازگشت به فروشگاه
        </a>
      </div>
    </div>
  );
}

export default EmptyBasket;

import { basketItems } from "../../../Data/basketContent";
import EmptyBasket from "./EmptyBasket";

function BasketContent() {
  if (!basketItems.length) return <EmptyBasket />;
  return <></>;
}

export default BasketContent;

import { Link } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartTotalQuantity);
  const totalCartPrice = useSelector(getCartTotalPrice);

  if (!totalCartQuantity) return;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-stone-800 p-4 text-sm uppercase sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link className="text-stone-200" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;

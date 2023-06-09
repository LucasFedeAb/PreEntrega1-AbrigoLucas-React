import cart from "./assets/bag-fill.svg";
import { useCart } from "../../Hooks/useCart";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div>
      <button className="btn position-relative  me-2">
        <img
          className="position-absolute top-0 start-0 ps-1"
          src={cart}
          alt="cart"
        />
        {totalQuantity > 0 && (
          <span className="position-absolute top-0 start-0 translate-middle badge border border-dark rounded-pill bg-danger">
            {totalQuantity}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;

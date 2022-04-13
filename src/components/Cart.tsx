import "../styles/cart.css";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../redux/features/cartSlice";
import "bootstrap-icons/font/bootstrap-icons.css";

interface CartProps {
  name: string;
  price: number;
  id: string;
}

const Cart: React.FC<CartProps> = (props) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id: string) => {
    dispatch(removeItem({ id }));
  };

  const editCartItem = (name: string, id: string) => {
    dispatch(editItem({ name, id }));
  };

  return (
    <div className="cartItem">
      <p>{props.name}</p>
      <p>{props.price} $</p>
      <div className="cartIcons">
        <i
          onClick={() => removeItemFromCart(props.id)}
          className="bi bi-x-square"
        ></i>
        <i
          onClick={() => editCartItem(props.name, props.id)}
          className="bi bi-pencil-square"
        ></i>
      </div>
    </div>
  );
};

export default Cart;

import "../styles/cart.css";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../redux/features/cartSlice";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

interface CartProps {
  name: string;
  price: number;
  id: string;
}

const Cart: React.FC<CartProps> = (props) => {
  const [edittingCartItem, setEdditingCartItem] = useState(false);

  const dispatch = useDispatch();

  const removeItemFromCart = (id: string) => {
    dispatch(removeItem({ id }));
  };

  const editCartItem = (name: string, id: string) => {
    dispatch(editItem({ name, id }));
  };

  return (
    <div className="cartItem">
      {edittingCartItem ? (
        <form>
          <input type="text" name="cartItem"></input>
        </form>
      ) : (
        <p>{props.name}</p>
      )}
      <p>{props.price} $</p>
      <div className="cartIcons">
        <i
          onClick={() => removeItemFromCart(props.id)}
          className="bi bi-x-square"
        ></i>
        <i
          onClick={() => setEdditingCartItem(true)}
          className="bi bi-pencil-square"
        ></i>
      </div>
    </div>
  );
};

export default Cart;

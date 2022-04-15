import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, editItem } from "../redux/features/cartSlice";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { RootState } from "../redux/store";

interface CartProps {
  name: string;
  price: number;
  id: string;
}

const Cart: React.FC<CartProps> = (props) => {
  const [edittingCartItem, setEdditingCartItem] = useState<boolean>(false);
  const [editedItem, setEditedItem] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEditedItem(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editCartItem(editedItem, props.id);
    setEdditingCartItem(false);
  };

  const removeItemFromCart = (id: string) => {
    dispatch(removeItem({ id }));
  };

  const editCartItem = (name: string, id: string) => {
    dispatch(editItem({ name, id }));
  };

  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div
      style={darkMode ? { borderColor: "#f1faee" } : { borderColor: "#001219" }}
      className="cartItem"
    >
      {edittingCartItem ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cartInput"
            value={editedItem}
            onChange={handleChange}
          ></input>
        </form>
      ) : (
        <p>{props.name}</p>
      )}
      <p>{props.price} $</p>
      <div className="cartIcons">
        <i
          onClick={() => setEdditingCartItem(true)}
          className="bi bi-pencil-square"
        ></i>
        <i
          onClick={() => removeItemFromCart(props.id)}
          className="bi bi-x-square"
        ></i>
      </div>
    </div>
  );
};

export default Cart;

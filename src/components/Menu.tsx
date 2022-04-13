import "../styles/menu.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/features/cartSlice";

interface MenuProps {
  name: string;
  price: number;
  id: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  const dispatch = useDispatch();

  const addItemToCart = (name: string, price: number, id: string) => {
    dispatch(addItem({ name, price, id }));
  };

  return (
    <div className="menu">
      <p onClick={() => addItemToCart(props.name, props.price, props.id)}>
        {props.name}
      </p>
      <p>{props.price}</p>
    </div>
  );
};

export default Menu;

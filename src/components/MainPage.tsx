import "../styles/mainPage.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Menu from "./Menu";
import { useEffect } from "react";
import { MenuList } from "../utils/MenuList";
import { addItem } from "../redux/features/cartSlice";

const MainPage: React.FC = () => {
  const shoppingCart = useSelector((state: RootState) => state.cart.value);

  return (
    <div className="mainPageDiv">
      <div className="mainPageHeading">
        <h1>Redux Menu</h1>
      </div>
      <div className="mainPageMenu">
        {shoppingCart.map((cartItem) => {
          return <Menu name={cartItem.item} price={cartItem.price} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
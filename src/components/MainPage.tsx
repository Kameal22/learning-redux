import "../styles/mainPage.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Menu from "./Menu";
import { useEffect } from "react";
import { MenuList } from "../utils/MenuList";
import { fetchItems } from "../redux/features/optionsSlice";
import Cart from "./Cart";

const MainPage: React.FC = () => {
  const shoppingOptions = useSelector(
    (state: RootState) => state.options.value
  );

  const shoppingCart = useSelector((state: RootState) => state.cart.value);

  const dispatch = useDispatch();

  useEffect(() => {
    MenuList.forEach((listItem) => {
      dispatch(fetchItems(listItem));
    });
  }, []);

  return (
    <div className="mainPageDiv">
      <div className="mainPageHeadingAndDescription">
        <h1>Redux Menu</h1>
        <h3>Simple redux application for learning purposes.</h3>
      </div>
      <div className="mainPageMenu">
        <div className="mainPageMenuOptions">
          {shoppingOptions.map((option) => {
            return (
              <Menu
                key={option.id}
                id={option.id}
                name={option.item}
                price={option.price}
              />
            );
          })}
        </div>
        <div className="mainPageMenuChoices">
          {shoppingCart.map((cartItem) => {
            return (
              <Cart
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.name}
                price={cartItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

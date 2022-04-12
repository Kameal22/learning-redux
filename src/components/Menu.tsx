import "../styles/menu.css";

interface MenuProps {
  key: string;
  name: string;
  price: number;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="menu">
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Menu;

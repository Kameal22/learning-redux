import "../styles/menu.css";

interface MenuProps {
  name: string;
  price: number;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="Menu">
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Menu;

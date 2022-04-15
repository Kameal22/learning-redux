import "../styles/nav.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Switch } from "@mui/material";
import { switchMode } from "../redux/features/darkModeSlice";

const Nav: React.FC = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div
      style={darkMode ? { color: "#f1faee" } : { color: "#001219" }}
      className="nav"
    >
      <h2>Navbar</h2>
      <div className="rightSideNav">
        <p className="register">Register</p>
        <Switch onChange={() => dispatch(switchMode())} />
      </div>
    </div>
  );
};

export default Nav;

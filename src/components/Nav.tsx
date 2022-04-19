import "../styles/nav.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Switch } from "@mui/material";
import { switchMode } from "../redux/features/darkModeSlice";
import { logoutUser } from "../redux/features/registerSlice";
import Register from "./Register";
import { useState } from "react";

const Nav: React.FC = () => {
  const [registering, setRegistering] = useState<boolean>(false);

  const dispatch = useDispatch();

  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const user = useSelector((state: RootState) => state.users.user);

  const stopRegistering = () => {
    setRegistering(false);
  };

  return (
    <div
      style={darkMode ? { color: "#f1faee" } : { color: "#001219" }}
      className="nav"
    >
      <h2>Navbar</h2>
      <div className="rightSideNav">
        {user.length === 0 ? (
          <p onClick={() => setRegistering(!registering)} className="register">
            Register
          </p>
        ) : (
          <p className="logout" onClick={() => dispatch(logoutUser())}>
            Logout
          </p>
        )}

        <Switch onChange={() => dispatch(switchMode())} />
        {registering ? <Register setRegistering={stopRegistering} /> : null}
      </div>
    </div>
  );
};

export default Nav;

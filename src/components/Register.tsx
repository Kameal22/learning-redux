import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/features/registerSlice";
import { handleError } from "../utils/FormErrorHandler";
import "../styles/register.css";

interface RegisterProps {
  setRegistering: () => void;
}

const Register: React.FC<RegisterProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerUser({ name, password }));
    props.setRegistering();
  };

  return (
    <div className="registerDiv">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerInputs">
          <label>
            Name:
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              name="name"
            />
          </label>
          <label>
            Password:
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              name="name"
            />
          </label>
        </div>
        <p className="error">{error}</p>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

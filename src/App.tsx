import "./styles/App.css";
import MainPage from "./components/MainPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "#001219" }
          : { backgroundColor: "#f1faee" }
      }
      className="App"
    >
      <MainPage />
    </div>
  );
}

export default App;

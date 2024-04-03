import "./App.css";
import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/randomColorGenerator";
import ThemeTogler from "./components/themeToggler";

function App() {
  return (
    <div className="flex flex-col items-center">
      <ThemeTogler />
      <Accordian />
      <RandomColorGenerator />
    </div>
  );
}

export default App;

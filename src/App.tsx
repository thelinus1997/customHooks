import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 300);
  return (
    <>
      <h1>debounced input</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Value debounced: {debouncedValue}</p>
    </>
  );
}

export default App;

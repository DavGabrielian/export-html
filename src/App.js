import { useState } from "react";
import "./App.scss";
import Preview from "./Components/Preview/Preview";
import Select from "./Components/Select/Select";
import Template from "./Components/Template/Template";

const App = () => {
  const [selectValue, setSelectValue] = useState("");
  const [selectedTemp, setSelectedTemp] = useState("");

  return (
    <div className="app">
      <Select setSelectValue={setSelectValue} />

      <Template selectValue={selectValue} setSelectedTemp={setSelectedTemp} />
      <Preview selectValue={selectValue} selectedTemp={selectedTemp} />
    </div>
  );
};

export default App;

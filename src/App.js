import { useState } from "react";
import "./App.scss";
import Preview from "./Components/Preview/Preview";
import Select from "./Components/Select/Select";
import Template from "./Components/Template/Template";

const App = () => {
  const [selectValue, setSelectValue] = useState("");

  return (
    <div className="app">
      <Select setSelectValue={setSelectValue} />

      <Template selectValue={selectValue} />
      <Preview />
    </div>
  );
};

export default App;

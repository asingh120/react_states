import React, { useState } from "react";
import "./App.css";
import Box from "./Box";
import Input from "./input";
import MySlider from "./slider";

const App = props => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [opacity, setOpacity] = useState(1);

  const handleChange = e => {
    setBackgroundColor(e.target.value);
  };

  const handleOpacity = (e, value) => {
    setOpacity(value);
  };

  return (
    <div className="App">
      <Input color={backgroundColor} handleChange={handleChange}></Input>
      <MySlider opacity={opacity} handleOpacity={handleOpacity} />
      <Box backgroundColor={backgroundColor} opacity={opacity}>
        {backgroundColor}
      </Box>
    </div>
  );
};

export default App;

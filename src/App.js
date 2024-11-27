import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  let [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;

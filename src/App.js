import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";

function App() {
  let [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;

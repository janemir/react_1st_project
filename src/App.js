import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';

function App() {
  let [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

  return (
    <div className="App">
      <div className="post">
        <div className="post__contend">
          <strong>1. javascript</strong>
          <div>
            javascript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
      <div className="post">
        <div className="post__contend">
          <strong>1. javascript</strong>
          <div>
            javascript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
      <div className="post">
        <div className="post__contend">
          <strong>1. javascript</strong>
          <div>
            javascript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;

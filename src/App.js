import React, { useState } from "react";

import './style.css';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>List of students</h1>
      </header>
      <Form
       inputText={inputText}
       setInputText={setInputText}
       />
    </div>
  );
}

export default App;

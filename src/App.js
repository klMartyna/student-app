import React, { useState } from "react";

import './style.css';
import Form from './components/Form';
import StudentList from "./components/StudentList"; 

function App() {
  const [inputText, setInputText] = useState("");
  const [students, setStudents] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)

  return (
    <div className="App">
      <header>
        <h1>List of students</h1>
      </header>
      <Form
       inputText={inputText}
       setInputText={setInputText}
       setButtonClicked={setButtonClicked}
       />
      <StudentList students={students} setStudents={setStudents} buttonClicked={buttonClicked}/>
    </div>
  );
}

export default App;

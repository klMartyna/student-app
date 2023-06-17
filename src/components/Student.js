import { useState } from "react";

import UpdatePopup from "./UpdatePopup"

const Student = ({student, buttonClicked, setButtonClicked}) => {
    const [updatedInfo, setUpdatedInfo] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen);
        setUpdatedInfo("");
        setButtonClicked(buttonClicked + 1)
    }

    const inputInfoHandler = (e) => {
        setUpdatedInfo(e.target.value);
    };

    const updateStudentHandler = async (e) => {
        e.preventDefault();

        const firstAndLastName = updatedInfo.split(" ");
        const firstName = firstAndLastName.shift();
        const restOfNames = firstAndLastName.join(" ");

        const updated_student_data = {
            "first_name": `${firstName}`, 
            "last_name": `${restOfNames}` 
        };

        const requestOptions = {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(updated_student_data),
            headers: {
                "Content-type": "application/json"
            }
        };
        
        const response = await fetch(`http://127.0.0.1:8000/students/${student.student_id}`, requestOptions);
        const student_data = await response.json();

        if (!response.ok) {
            console.log("Something went wrong");
        } else {
            console.log("Student info updated")
            toggle();
        };

        console.log(student_data);
    };

    const deleteStudentHandler =  async () => {
        setButtonClicked(buttonClicked + 1)

        const requestOptions = {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        };
        
        const response = await fetch(`http://127.0.0.1:8000/students/${student.student_id}`, requestOptions);
        const response_detail = await response.json();

        if (!response.ok) {
            console.log("Something went wrong");
        } else {
            console.log("Student deleted")
        };

        console.log(response_detail);
    };

    return (
        <div>
            <div className="student">
                <li className="student-item">
                    Name: {student.first_name} <br/>Surname: {student.last_name} <br/>ID: {student.student_id}
                </li>
                <button onClick={toggle} className="update-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteStudentHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
            <div>
                {isOpen && <UpdatePopup 
                updatedInfo={updatedInfo}
                inputInfoHandler={inputInfoHandler}
                updateStudentHandler={updateStudentHandler}
                />}
            </div>
        </div>
    );
}

export default Student;
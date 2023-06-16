import Student from "./Student";
import { useEffect } from "react";

const StudentList = ({students, setStudents, buttonClicked}) => {
    useEffect(() => {
        getAllStudents();
    }, [buttonClicked])

    const getAllStudents = async () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        };
        
        const response = await fetch(`http://127.0.0.1:8000/students`, requestOptions);
        const students_data = await response.json();
        
        setStudents(Object.values(students_data))
    }

    return (
        <div className="student-container">
            <ul className="student-list">
                {students.map((student, index) => (
                    <Student key={index} student={student} />
                ))}
            </ul>
        </div>
    )
}

export default StudentList;
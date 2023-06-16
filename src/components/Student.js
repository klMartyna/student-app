const Student = ({student}) => {

    return (
        <div className="student">
            <li className="student-item">
                Name: {student.first_name} <br/>Surname: {student.last_name} <br/>ID: {student.student_id}
            </li>
        </div>
    )
}

export default Student;
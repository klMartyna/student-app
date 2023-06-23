const Form = ({setInputText, inputText, buttonClicked, setButtonClicked}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    
    const submitStudentHandler = async (e) => {
        e.preventDefault();
        setButtonClicked(buttonClicked + 1);

        const firstAndLastName = inputText.split(" ");
        const firstName = firstAndLastName.shift();
        const restOfNames = firstAndLastName.join(" ");

        const submitted_student_data = {
            "first_name": `${firstName}`, 
            "last_name": `${restOfNames}` 
        };

        const requestOptions = {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(submitted_student_data),
            headers: {
                "Content-type": "application/json"
            }
        };
        
        const response = await fetch(`http://127.0.0.1:8000/students`, requestOptions);
        const student_data = await response.json();

        if (!response.ok) {
            console.log("Something went wrong");
        } else {
            console.log("Student data submitted")
        };

        console.log(student_data);
        setInputText("");
    };

    return (<form>
        <input
         value={inputText}
         onChange={inputTextHandler}
         type="text"
         placeholder="Enter student name and surname"
         className="student-input" />
        <button onClick={submitStudentHandler}
         className="student-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        </form>);
}

export default Form;

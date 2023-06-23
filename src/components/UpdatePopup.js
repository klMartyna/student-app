const UpdatePopup = ({updatedInfo, inputInfoHandler, updateStudentHandler}) => {
    return (
        <form className="student-form">
            <input
            value={updatedInfo}
            onChange={inputInfoHandler}
            type="text"
            placeholder="Enter updated name and surname"
            className="student-input" />
            <button onClick={updateStudentHandler}
                className="student-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default UpdatePopup;
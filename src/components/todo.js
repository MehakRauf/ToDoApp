import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import './Todo.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todo = ({ value }) => {
    const { removeNotes, editNotes } = useContext(StoreContext);
    const [isEditing, setIsEditing] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [newText, setNewText] = useState(value);
    const [isChecked, setIsChecked] = useState(false);

    const handleViewClick = () => {
        setIsViewing(true);
    };

    const handleNotView = () => {
        setIsViewing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editNotes(value, newText); // Call editNotes with the current value and newText
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
    };

    const truncateText = (text, length) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div
                className="input-group mt-3 cont"
                style={{
                    maxWidth: "400px",
                    backgroundColor: isChecked ? "#3CB371" : "#f9f9f9"
                }}
            >
                <div>
                    {isEditing ? (
                        <div className="edit-modal">
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                            <button onClick={handleSave} className='save-button'>SAVE</button>
                            <button onClick={handleCancel} className='cancel-button'>CANCEL</button>
                        </div>
                    ) : isViewing ? (
                        <div className="edit-modal">
                            <p>{value}</p>
                            <button onClick={handleNotView} className='cancel-button'>CANCEL</button>
                        </div>
                    ) : (
                        <p>{truncateText(value, 10)}</p>
                    )}
                </div>
                {!isEditing && !isViewing && (
                    <div className='icons-container'>
                        <div className="edit-icon" onClick={handleEditClick}>
                            <b><EditIcon /></b>
                        </div>
                        <div className="delete-icon" onClick={() => removeNotes(value)}>
                            <b><DeleteIcon /></b>
                        </div>
                        <div className="eye-icon" onClick={handleViewClick}>
                            <b><RemoveRedEyeIcon /></b>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todo;

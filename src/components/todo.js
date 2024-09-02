import React, { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { StoreContext } from '../context/StoreContext';

const Todo = ({ value }) => {
    const { removeNotes } = useContext(StoreContext);

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="input-group mt-3" style={{ maxWidth: "400px" }}>
                    <div>
                        <p>{value}</p>
                    </div>
                    <div className='icons-container'>
                        <div className="edit-icon">
                            <b><EditIcon /></b>
                        </div>
                        <div className="delete-icon" onClick={() => removeNotes(value)}>
                            <b><DeleteIcon /></b>
                        </div>
                        <div className="eye-icon">
                            <b><RemoveRedEyeIcon /></b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;

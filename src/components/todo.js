import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Todo = () => {
    return (
        <>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="input-group mt-3" style={{ maxWidth: " 400px" }}>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="ADD TASK"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn btn-outline-none bg-black text-white d-flex gap-10 align-items-center"
                        type="button"
                        id="button-addon2"
                    >
                       <b><EditIcon/></b> 
                       <b><DeleteIcon/></b> 
                       <b><RemoveRedEyeIcon/></b> 
                    </button>
                </div>
            </div>

        </>
    )
}

export default Todo
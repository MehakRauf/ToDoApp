import React from 'react'
import AddIcon from '@mui/icons-material/Add';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-center w-100">
                    <a className="navbar-brand " href="#">
                        ToDo List
                    </a>
                </div>
            </nav>
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
                        class="btn btn-outline-none bg-danger text-white"
                        type="button"
                        id="button-addon2"
                    >
                        <b><AddIcon/></b>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Navbar
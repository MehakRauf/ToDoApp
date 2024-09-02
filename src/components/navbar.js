import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { text, setText, addNotes, notes } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-center w-100">
                    <a className="navbar-brand" href="#">
                        ToDo List
                    </a>
                </div>
            </nav>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="input-group mt-3" style={{ maxWidth: "400px" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ADD TASK"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-none bg-danger text-white"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            addNotes();
                            navigate('/todo');
                        }}>
                        <b><AddIcon /></b>
                    </button>
                </div>
            </div >
        </>
    );
};

export default Navbar;

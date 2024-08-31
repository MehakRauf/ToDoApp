import React from 'react'

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
                        class="btn btn-outline-none bg-danger text-white"
                        type="button"
                        id="button-addon2"
                    >
                       <b>+</b> 
                    </button>
                </div>
            </div>

        </>
    )
}

export default Todo
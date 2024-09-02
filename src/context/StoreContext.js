import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const [notes, setNotes] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        return savedNotes;
    });

    const addNotes = () => {
        setNotes((prev) => ({ ...prev, [count]: text }));
        setCount((prev) => prev + 1);
        setText("")
    }

    const removeNotes = (text) => {
        setNotes((prev) => {
            const newNotes = { ...prev }; // Create a shallow copy of the notes object
            for (const [key, value] of Object.entries(newNotes)) {
                if (value === text) {
                    delete newNotes[key]; // Remove the entry with the matching value
                    break; // Exit the loop once the note is found and removed
                }
            }
            return newNotes; // Return the updated object
        });
    };

    const editNotes = (oldText, newText) => {
        setNotes((prev) => {
            const newNotes = { ...prev }; // Create a shallow copy of the notes object
            for (const [key, value] of Object.entries(newNotes)) {
                if (value === oldText) {
                    newNotes[key] = newText; // Update the value for the matching key
                    break; // Exit the loop once the note is found and updated
                }
            }
            return newNotes; // Return the updated object
        });
    };



    const contextValue = {
        notes,
        setNotes,
        addNotes,
        removeNotes,
        text,
        setText,
        editNotes,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;

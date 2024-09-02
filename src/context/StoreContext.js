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
            // Convert object to an array of [key, value] pairs
            const entries = Object.entries(prev);

            // Filter out the entry where the value matches the text to be removed
            const filteredEntries = entries.filter(([key, value]) => value !== text);

            // Convert the filtered entries back to an object
            const newNotes = Object.fromEntries(filteredEntries);

            return newNotes;
        });
    }

    const editNotes = (oldText, newText) => {
        setNotes((prev) => {

            // Convert object to an array of [key, value] pairs
            const entries = Object.entries(prev);

            // Map over the entries to update the note with the matching oldText
            const updatedEntries = entries.map(([key, value]) => {
                if (value === oldText) {
                    return [key, newText]; // Update the value with newText
                }
                return [key, value]; // Keep the existing key-value pair
            });

            // Convert the updated entries back to an object
            const newNotes = Object.fromEntries(updatedEntries);

            return newNotes;
        });
    }


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

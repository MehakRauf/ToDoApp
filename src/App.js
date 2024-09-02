import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from './context/StoreContext'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

const App = () => {
  const { notes } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Navbar />
      {Object.entries(notes).map(([key, value]) => (
        <Todo key={key} value={value}></Todo>
      ))
      }
    </>
  )
}

export default App
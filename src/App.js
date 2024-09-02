import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import { Routes, Route } from 'react-router-dom'
import { StoreContext } from './context/StoreContext'

const App = () => {
  const { text, setText, removeNotes, notes } = useContext(StoreContext);

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
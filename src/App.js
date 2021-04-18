import React from 'react'
import Vaca from './components/Vaca'
import "./App.css"
import NavBar from './components/Nav/NavBar'

export default function App() {
  return (
    <>
      <NavBar/>
    <div className={"App"}>
      <h1>ola mundo</h1>
      <Vaca/>
    </div>
    </>
  )
}

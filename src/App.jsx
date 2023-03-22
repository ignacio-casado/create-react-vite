import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Characters from './components/Characters';


function App() {

  useState [characters, setCharacters] = useState([]);

 
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      setCharacters(data.results)
    }

  },[])

  return (

    <>
      <h1>Rick and morty api</h1>
    </>
  
  )}

export default App

import React, {useState, useEffect } from "react";
import axios from "axios";


//header
import Header from "./components/Header";
//formuarlio
import UsuarioForm from "./components/UsuarioForm";
function App() {
  const[usuarios, setUsuarios ] = useState([]);

  useEffect( ()=>{
    axios.get('/get/')
    .then((response) =>{
      setUsuarios(response.data)
    }).catch(()=>{
      alert("Algo salió mal")
    })
  }, [])



  return (
    <>
      <Header/>
      <div className="container p-4">
        <br/>
        <UsuarioForm usuarios={usuarios} setUsuarios={setUsuarios}/> 
      </div>
      
    </>
  )
}

export default App;

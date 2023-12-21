import { useState } from 'react'
import axios from "axios";

import './App.css'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import Legend from './components/Legend';
import { response } from 'express';

function App() {
  const [value, setValue] = useState(0);
  const [resultado, setResultado] = useState();
  function buscar(){
    axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
    .then(function (response: { data: any; }){
        console.log(response.data)
        setValue(response.data.total);
        const result: Location[] = []
        
      })
    }

  function clear(){
    setValue(0);
  }
  return (
    <>
      <Header />
      <SearchBox results={value} function={buscar} function2={clear}/>
      <Legend />
      
    </>
  )
}

export default App

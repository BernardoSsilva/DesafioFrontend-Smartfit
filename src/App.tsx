import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Legend from './components/Legend';
import ResultCard from './components/ResultCard';

function App() {
  const [value, setValue] = useState(0);
  const refResults = useRef(null);
  const [results, setResults] = useState([]);
  const cards: any[] = [];


  function search(filterVal:any) {
    
    axios.get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
      .then((response) => {
        const filter = filterVal
        console.log(filter)
        const data = response.data;
        const total = response.data.total;
        for (let i = 0; i < total; i++) {
          cards.push(data.locations[i]);

        }
        console.log(cards);
        setResults(cards);
        setValue(total);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      });
  }

  function clear(event:any) {
    window.location.reload(false);
  }

  return (
    <>
      <Header />
      <SearchBox results={value} search={search} function2={clear} />
      <Legend />
      <div className='resultRow' >
        {value > 0 ? (
          results.map((item, index) => (
            <ResultCard item={item} />
          ))
          // <h1>Alguma coisa tem dentro dessa merda</h1>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>

    </>
  );
}

export default App;
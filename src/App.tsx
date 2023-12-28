import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Legend from "./components/Legend";
import ResultCard from "./components/ResultCard";

function App() {
  const [value, setValue] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const cards: any[] = [];

  function search() {
    axios
      .get(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      )
      .then((response) => {
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
        console.error("Ocorreu um erro ao buscar os dados:", error);
      });
  }

  function clear() {
    window.location.reload();
  }

  return (
    <>
      <div className="mainBody">
        <Header />
        <SearchBox results={value} search={search} function2={clear} />
        <Legend />
        <div className="resultRow">
          {value > 0 ? (
            results.map((item) => <ResultCard item={item} />)
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

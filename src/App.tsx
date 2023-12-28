import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Legend from "./components/Legend";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const cards: any[] = [];

  function isBetween6and12(hourString: string) {
    const hour = parseInt(hourString, 10);

    return !isNaN(hour) && hour >= 6 && hour <= 12;
  }

  function isBetween13and18(hourString: string) {
    const hour = parseInt(hourString, 10);

    return !isNaN(hour) && hour >= 13 && hour <= 18;
  }

  function isBetween19and23(hourString: string) {
    const hour = parseInt(hourString, 10);

    return !isNaN(hour) && hour > 18 && hour <= 23;
  }

  function search(period: string, closed:boolean) {
    axios
      .get("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
      .then((response) => {
        const data = response.data;
  
        if (data.locations && Array.isArray(data.locations)) {
          const total = data.total;
  
          for (let i = 0; i < total; i++) {
            const schedules = data.locations[i].schedules;
  
            if(closed){
              cards.push(data.locations[i]);
            } else {
              if (schedules && Array.isArray(schedules)) {
                if (period === "manha" && schedules.some((schedule: { hour: string }) => isBetween6and12(parseInt(schedule.hour, 10).toString()))) {
                  cards.push(data.locations[i]);
                } else if (period === "tarde" && schedules.some((schedule: { hour: string }) => isBetween13and18(parseInt(schedule.hour, 10).toString()))) {
                  cards.push(data.locations[i]);
                } else if (period === "noite" && schedules.some((schedule: { hour: string }) => isBetween19and23(parseInt(schedule.hour, 10).toString()))) {
                  cards.push(data.locations[i]);
                } else {
                  cards.push(data.locations[i]);
                }
              } else {
                console.error("Invalid schedules array:", schedules);
              }
            }
            
          }
  
          console.log(cards);
          setResults(cards);
          setValue(cards.length);
        } else {
          console.error("Invalid data structure:", data);
        }
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
        <SearchBox results={value} search={(period: string, closed: boolean) => search(period, closed)} function2={clear} />
        <Legend />
        <div className="resultRow">
          {value > 0 ? (
            results.map((item) => <ResultCard item={item} />)
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

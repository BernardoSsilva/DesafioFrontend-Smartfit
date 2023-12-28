import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, MouseEventHandler, useState } from "react"
import iconhour from "../assets/iconhour.png"
export default function SearchBox(props: { search: (arg0: string, arg1: boolean) => void; results: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; function2: MouseEventHandler<HTMLButtonElement> | undefined; }){
    
    const [selectedPeriod, setSelectedPeriod] = useState<string>("");
    
    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const selectedPeriod = form.period.value;
        const fechado = form.fechado.checked;
        
        if (selectedPeriod === "") {
            props.search("all", fechado);
            console.log("all")
        } else {
            props.search(selectedPeriod, fechado);
            console.log(selectedPeriod);
        }
    }
    return (
        <>
        <form onSubmit={handleForm}>
            <div className="filterBox">
                <p className="hourTitle">
                    <img src={iconhour} alt="" />
                    <span>
                        Horário
                    </span>
                </p>

                <h2>
                    Qual Periodo quer treinar?
                </h2>
                <hr />
                <div className="optionLine">
                    <p>
                        <input 
                        type="radio"
                        name="period"
                        value="manha"
                        checked={selectedPeriod === "manha"}
                        onChange={() => setSelectedPeriod("manha")}
                        /> 
                        Manhã
                        <span>
                            06:00 às 12:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input 
                        type="radio"
                        name="period"
                        value="tarde"
                        checked={selectedPeriod === "tarde"}
                        onChange={() => setSelectedPeriod("tarde")}
                        />
                           Tarde
                        <span>
                            12:01 às 18:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input 
                             type="radio"
                             name="period"
                             value="noite"
                             checked={selectedPeriod === "noite"}
                             onChange={() => setSelectedPeriod("noite")}
                             />
                        Noite

                        <span>
                            18:01 às 23:00
                        </span>
                    </p>
                </div>
                <hr />

                <div className="optionLine">
                    <p>
                        <input type="checkbox" name="fech" id="fechado" />
                        Exibir unidades fechadas
                        <span>
                            Resultados encontrados:<strong>{props.results}</strong>
                        </span>
                    </p>
                </div>

                <div className="buttons">
                    <input type="submit" value="Encontrar Unidade" className="buttonFind"/>
                    {/* <button className="buttonFind" onClick={props.search}>
                    Encontrar Unidade
                    </button> */}

                    <button className="buttonClear" onClick={props.function2}>
                        Limpar
                    </button>
                </div>
            </div>
            </form>
        </>
    )
}
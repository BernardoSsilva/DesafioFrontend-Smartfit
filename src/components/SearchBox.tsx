import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, MouseEventHandler } from "react"
import iconhour from "../assets/iconhour.png"
export default function SearchBox(props: { search: () => void; results: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; function2: MouseEventHandler<HTMLButtonElement> | undefined; }){
    
    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const selectedPeriod = form.period.value;
        
        if (selectedPeriod === "") {
            props.search();
        } else {
            props.search();
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
                        <input type="radio" name="period" id="1" value="manha"/> 
                        Manhã
                        <span>
                            06:00 às 12:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input type="radio" name="period" id="2" value="tarde"/>
                           Tarde
                        <span>
                            12:01 às 18:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input type="radio" name="period" id="3" value="noite"/>
                        Noite

                        <span>
                            18:01 às 23:00
                        </span>
                    </p>
                </div>
                <hr />

                <div className="optionLine">
                    <p>
                        <input type="checkbox" name="fech" id="" />
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
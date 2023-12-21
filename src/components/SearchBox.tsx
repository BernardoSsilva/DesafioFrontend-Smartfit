import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, MouseEventHandler } from "react"
import iconhour from "../assets/iconhour.png"
export default function SearchBox(props: { results: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; function: MouseEventHandler<HTMLButtonElement> | undefined; function2: MouseEventHandler<HTMLButtonElement> | undefined }){
    return (
        <>
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
                        <input type="radio" name="periodo" id="1" />
                        Manhã
                        <span>
                            06:00 às 12:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input type="radio" name="periodo" id="2" />
                           Tarde
                        <span>
                            12:01 às 18:00
                        </span>
                    </p>
                </div>

                <hr />

                <div className="optionLine">
                    <p>
                        <input type="radio" name="periodo" id="3" />
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
                    <button className="buttonFind" onClick={props.function}>
                        Encontrar Unidade
                    </button>

                    <button className="buttonClear" onClick={props.function2}>
                        Limpar
                    </button>
                </div>
            </div>
        </>
    )
}
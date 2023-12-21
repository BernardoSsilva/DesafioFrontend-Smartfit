import logo from "../assets/logo.svg";
import "../App.css"
export default function Header() {
    return (
        <>
            <div className="headder">
                <a href="#">
                    <img className="logo" src={logo} alt="" />
                </a>
            </div>

            <div className="headBody">
                <h1>
                    REABERTURA
                    <br>
                    </br>
                    SMART FIT
                    <br></br>
                </h1>
                <div className="underBox">

                </div>
                <p>
                    O horario de funcionamento das nossas unidades está seguindo os decretos de cada municipio. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
                </p>
            </div>

        </>
    )
}
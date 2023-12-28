import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerImage">
          <a href="#">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>

        <br></br>
        <div className="footerParagraph">
            <p>Todos os direitos reservados - 2020</p>
        </div>
        
      </div>
    </>
  );
}

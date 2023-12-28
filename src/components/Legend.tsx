import requiredmask from "../assets/requiredmask.png";
import recommendedmask from "../assets/recommendedmask.png";
import forbiddenfountain from "../assets/forbiddenfountain.png";
import forbiddenlockerroom from "../assets/forbiddenlockerroom.png";
import partiallockerroom from "../assets/partiallockerroom.png";
import requiredlockerroom from "../assets/requiredlockerroom.png";
import requiredtowel from "../assets/requiredtowel.png";
import recommendedtowel from "../assets/recommendedtowel.png";
import partialfountain from "../assets/partialfountain.png";

export default function Legend() {
  return (
    <>
      <div className="legendBox">
        <div className="card">
          <h3>Mascara</h3>
          <br />

          <div className="row">
            <div className="imageCard">
              <img src={requiredmask} alt="" />
              <p>Obrigatório</p>
            </div>
            <div className="imageCard">
              <img src={recommendedmask} alt="" />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Toalha</h3>
          <div className="row">
            <div className="imageCard">
              <img src={requiredtowel} alt="" />
              <p>Obrigatório</p>
            </div>
            <div className="imageCard">
              <img src={recommendedtowel} alt="" />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Bebedouro</h3>
          <div className="row">
            <div className="imageCard">
              <img src={partialfountain} alt="" />
              <p>Parcial</p>
            </div>
            <div className="imageCard">
              <img src={forbiddenfountain} alt="" />
              <p>Proíbido</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Vestiários</h3>
          <div className="row">
            <div className="imageCard">
              <img src={requiredlockerroom} alt="" />
              <p>Liberado</p>
            </div>
            <div className="imageCard">
              <img src={partiallockerroom} alt="" />
              <p>Parcial</p>
            </div>
            <div className="imageCard">
              <img src={forbiddenlockerroom} alt="" />
              <p>Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

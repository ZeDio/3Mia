import BlocoLado2 from "../Componentes/Contato/Blocos/BlocoLado2";
import BlocoLado1 from "../Componentes/Contato/Blocos/BlocoLado1";

const Contato = ()=>{
    return(
        <main>
      <div className="cima3">
        <div className="bloco1_3">
          <BlocoLado1/>
        </div>
        <div className="dividi">
        </div>
        <div>
          <BlocoLado2/>
        </div>
      </div>
    </main>
    )
}

export default Contato
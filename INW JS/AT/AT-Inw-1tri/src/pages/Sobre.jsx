import BlocoBaixo from "../Componentes/Sobre/Blocos/BlocoBaixo";
import BlocoCima from "../Componentes/Sobre/Blocos/BlocoCima";

const Sobre = ()=>{
    return(
        <main>
      <div className="cima">
        <div className="bloco1">
          <BlocoCima/>
        </div>
        <div>
          <img src="/public/telefone.png" alt="png"/>
        </div>
      </div>
      <div className="baixo">
        <BlocoBaixo/>
      </div>
    </main>
    )
}

export default Sobre
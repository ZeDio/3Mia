import BlocoBaixo from "../Componentes/Home/Blocos/BlocoBaixo";
import BlocoCima from "../Componentes/Home/Blocos/BlocoCima";

function Home() {
  return (
    <main>
      <div className="cima">
        <div className="bloco1">
          <BlocoCima/>
        </div>
        <div>
          <img src="/public/img1.png" alt="png"/>
        </div>
      </div>
      <div className="baixo">
        <BlocoBaixo/>
      </div>
    </main>
  );
}

export default Home;
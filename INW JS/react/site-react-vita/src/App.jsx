import './App.css'
import Banner from './Componentes/Banner/Banner'
import Abilidades from './Componentes/ConteudoPrincipal/Abilidades'
import InforForms from './Componentes/ConteudoPrincipal/InfoForms'
import InfoPrincipal from './Componentes/ConteudoPrincipal/InfoPrincipal'
import Footer from './Componentes/Footer/Footer'

function App() {

  return (
    <>
      <Banner/>
      <div class="mainInfo">
        <section id="info">
          <InfoPrincipal/>
          <Abilidades/>
        </section>
        <section id="contact">
            <InforForms/>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default App

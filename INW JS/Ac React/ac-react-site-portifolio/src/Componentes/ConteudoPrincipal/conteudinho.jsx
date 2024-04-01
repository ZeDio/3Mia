import Apresentacao from "./Apresentacao"
import Banner from "./Banner"
import Forms from "./Forms"
import Cards from "./cards"


function Conteudinho(){
    return(
        <main>
            <Banner/>
            <Apresentacao/>
            <Cards/>
            <Forms/>
        </main>
    )
}
export default Conteudinho
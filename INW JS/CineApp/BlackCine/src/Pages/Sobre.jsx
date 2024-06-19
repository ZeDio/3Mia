import { useState, useEffect } from "react";

function Sobre() {

    const [filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))


    },[])

    return ( 
        <main className="flex flex-wrap justify-center">
        
        {filmes.length > 0 && (
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${filmes[Math.floor(Math.random() * filmes.length)].backdrop_path}`}
                        alt="Backdrop"
                    />
                </div>
            )}

            <div className="max-w-2xl mx-auto mt-8 mb-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Sobre</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Bem-vindo à página de informações sobre o Black Filmes. Aqui você pode encontrar informações sobre o projeto, sua missão, e os filmes que são destacados.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Black Filmes é um projeto dedicado a promover filmes feitos por cineastas negros, explorando suas histórias, culturas e contribuições para a indústria cinematográfica.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Fique à vontade para explorar nossas coleções de filmes, ler sobre os diretores e artistas envolvidos, e descobrir mais sobre como o cinema negro molda nossa perspectiva cultural.
                </p>
            </div>

         </main>
     );
}

export default Sobre;
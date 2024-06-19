import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch (error => console.log(error))


    },[])

    console.log(filmes)

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


            <div className="listaFilmes flex flex-row gap-3 flex-wrap mt-10 ml-3">
            {
                filmes.map(
                    filme =>(
                        <div className="group flex flex-col items-center" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30 rounded-lg" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt="" /><img/></Link>
                            <div className="w-8/12 flex flex-col text-center items-center text-white relative bottom-24">
                                <h1 className="font-extrabold">{filme.title}</h1>
                                <Link to={`${filme.id}`} className="bg-primary-color p-2 rounded-lg">Saiba Mais</Link>
                            </div>
                        </div>
                    )
                )
            }
            </div>
        </main>
     );
}

export default Filmes;
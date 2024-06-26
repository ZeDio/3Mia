import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function DetalhesFilme() {

    console.log(useParams())
    const {id} = useParams();
    const [filme, setFilme] = useState({})

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch (error => console.log(error))


    },[])

    return ( 
        <>
            <div className="flex flex-wrap justify-center ">
                <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}/>
                <div className=" bg-primary-color text-white w-10/12 p-10 bottom-10 relative">
                    <p className="text-3xl mb-2">{filme.title}</p>
                    <p>{filme.overview}</p>
                </div>
            </div>
        </>
     );
}

export default DetalhesFilme;
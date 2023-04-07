import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './index.css'

function Home() {

    
    const [filmes, setFilmes] = useState([])
    const [loading, setloading] = useState(true) // variavel de carregamento.

    // fazer a chamada da api.
    useState(() => {
        async function carregarFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "113622eb4600dbf11e044ac848f26175", // minha chave da api
                    language: "pt-BR", // tipo de linguagem da descrição.
                    page: 1 // quantas paginas 
                }

            }

            )
        //    console.log(response.data.results.slice(0,10)) // listar 10 os resultados.
          setFilmes(response.data.results.slice(0,30))
          setloading(false )
        }



        carregarFilmes()
    }, [])


    if (loading) {
        return(
            <div className="loading">
                <h2> Carregando Filmes .......</h2>
            </div>
        )
    }


    return (
        <div className="container">
           <div className="lista-filmes">
               {filmes.map( (filmes) =>{
                return(
                    <article key={filmes.id}>
                        <strong>{filmes.title.slice(0,14)}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}  alt={filmes.title} />
                        <Link to={`/filmes/${filmes.id}`} >Acessar</Link>
                    </article>
                )
               })}
           </div>
        </div>
    )
}


export default Home;
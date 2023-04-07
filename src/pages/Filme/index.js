import { useState, useEffect } from 'react';
import { useParams, useNavigate, json } from 'react-router-dom';
import api from '../../services/api';
import { Toast, toast } from 'react-toastify';


import './index.css';


function Filme() {

    const { id } = useParams(); // pegando o id do filme.
    const [detalheFilme, setDetalheFilme] = useState({});
    const [carregando, setCarregando] = useState(true);
    const navegacao = useNavigate();

    //Fazendo a chamada a api.
    useEffect(() => {
        async function fimesDetalhes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "113622eb4600dbf11e044ac848f26175", // minha chave da api
                    language: "pt-BR", // tipo de linguagem da descrição.
                }
            })
            // caso exista o filme pesquisado.
                .then((response) => {
                    // console.log(response.data)
                    setDetalheFilme(response.data);
                    setCarregando(false);
                })
            // caso o filme nao exista, retorna para a pagina home.
                .catch(() => {
                  navegacao('/', {replace: true}) 
                  return;
                })
        }

        // chamando a função que faz a chamada a api.
        fimesDetalhes(); 

        return () => {
            console.log(``)
        }




    }, [navegacao, id])


    // função para salvar os filmes.
    function salvarFilme(params) {
        const minhaLista = localStorage.getItem('@prime-film');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvos)=> filmesSalvos.id === detalheFilme.id)

        if (hasFilme) {
           toast.warn("Esse filme ja esta na sua lista.")
            return;
        }

        filmesSalvos.push(detalheFilme);
        localStorage.setItem('@prime-film', JSON.stringify(filmesSalvos))
       toast.success("Filme salvo com sucesso.");
    }



    // mostrando uma mensagem de CARREGANDO FILMES  antes de exibir. 
    if (carregando) {
        return (
            <div className="loading">
                <h2> Carregando Filmes .......</h2>
            </div>
        )
    }

    return (
        <div className="">
            <div className='filme-info'>
                <h1> {detalheFilme.title} </h1>
                <img src={`https://image.tmdb.org/t/p/original/${detalheFilme.backdrop_path}`} alt={detalheFilme.title} />

                <h3>Sinopse</h3>
                <span>{detalheFilme.overview}</span>
                <strong> Avaliação: {detalheFilme.vote_average} /10</strong>

                <div className='area-botao'>
                    <button onClick={salvarFilme}> Salvar </button>
                    <button> <a href={`https://youtube.com/results/?search_query=${detalheFilme.title}`} target='blank' rel='external' > Assistir trilher</a> </button>
                </div>
                
            </div>
        </div>
    )
}


export default Filme;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'

import './index.css';


// listando os filmes salvos no local Store.
function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem('@prime-film');
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])



// excluir os filmes salvos no local Store.
function excluirFilme(id) {
  

    let filtarFilmes = filmes.filter( (item) =>{
        return (item.id !== id)
    })

    setFilmes(filtarFilmes);
    localStorage.setItem('@prime-film', JSON.stringify(filtarFilmes))
    toast.success("Filme excuido.")
}



    return (
        <div className='meus-filmes'>
            <h1>Minha lista de filmes</h1>

            {filmes.length === 0 && <samp> Voce não tem filmes salvos.</samp>}


            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id} >
                            
                            <samp> {item.title} </samp>
                            <div>
                                <Link to={`/filmes/${item.id}`}> Ver detalhes</Link>
                                {/* passando o id para fazer a exclusão. */}
                                <button onClick={ ()=> excluirFilme(item.id) } >Excluir</button>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

















export default Favoritos;








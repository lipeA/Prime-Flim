import './index.css';
import { Link } from 'react-router-dom';

function Hearder() {
    return(
       <header>
            <Link className='logo' to="/"> Prime Film</Link>

            <Link className='favoritos' to="/favoritos"> Meus Filmes</Link>
            
       </header>
    )
}


export default Hearder;
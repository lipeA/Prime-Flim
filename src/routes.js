import { BrowserRouter, Routes, Route } from "react-router-dom";
// importação de pages
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";

// importação de components
import Hearder from "./components/Hearder";



function RoutersApp() {
    return(
        <BrowserRouter>
            <Hearder></Hearder>
            <Routes>
               
               {/* caminho para a pagina home. */}
                <Route path="/" element={<Home/>}>  </Route>
                
                {/* caminho para a pagina de detalhes do filmes, passando o id do filme. */}
                <Route path="/filmes/:id" element={<Filme/>}>  </Route>
               
                {/* caminho para a pagina de favoritos. */}
                <Route path="/favoritos" element={<Favoritos/>}>  </Route>

                {/* caminho de erro. */}
                <Route path="*" element={<Erro/>} ></Route>

            </Routes>

        </BrowserRouter>
    )
}

export default RoutersApp;







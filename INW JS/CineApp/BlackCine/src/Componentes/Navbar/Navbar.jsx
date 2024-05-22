import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <ul className="flex gap-3">
                <il><Link to="/">Home</Link></il>
                <il><Link to="filmes">Filmes</Link></il>
                <il><Link to="sobre">Sobre</Link></il>
                <il><Link to="contato">Contato</Link></il>
            </ul>
        </nav>
     );
}

export default Navbar;
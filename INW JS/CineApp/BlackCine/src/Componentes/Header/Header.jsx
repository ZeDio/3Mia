import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-primary-color text-white p-4 justify-between">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao BlackCine</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;
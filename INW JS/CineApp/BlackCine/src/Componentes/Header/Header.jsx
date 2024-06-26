import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex w-full fixed top-3 bg-primary-color text-white p-4 items-center justify-between">
            <div className="flex items-center">
                <span className="mr-2">Olá, visitante!</span>
                <img src="BlackCine.svg" alt="logo" /> 
            </div>
            <Navbar/>
        </header>
        
     );
}

export default Header;
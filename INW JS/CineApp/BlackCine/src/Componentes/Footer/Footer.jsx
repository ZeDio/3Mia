function Footer() {
    return ( 
        <footer className="bg-primary-color text-white flex justify-between p-10 m-2">
            <div className="w-30">
                <img src="../../../public/BlackCine.svg" alt="logo" /> 
                <p className="mt-5">Empresa de filmes, criada em um projeto na escola..</p>
            </div>

            <div>
                <h1 className="text-2xl mb-5">Fale Com Nós</h1>
                <div className="flex ">
                    <img src="../../../public/contato/instagram.svg" alt="Instagram" className="m-1"/>
                    <img src="../../../public/contato/github.svg" alt="Github" className="m-1"/>
                    <img src="../../../public/contato/whatsapp.svg" alt="Whatsapp" className="m-1"/>
                    <img src="../../../public/contato/linkedin.svg" alt="Linkedin" className="m-1"/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
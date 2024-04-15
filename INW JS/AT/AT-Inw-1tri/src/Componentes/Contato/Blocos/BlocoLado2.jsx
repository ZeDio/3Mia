function BlocoLado2() {
    return (
      <>
      <form action="post">
        <div>
          <h2>Nome:</h2>
          <input type="text" />
        </div>
        <div>
          <h2>E-mail:</h2>
          <input type="text" />
        </div>
        <div className="especial">
          <h2>Mensagem:</h2>
          <input type="text" />
        </div>
        <button>Enviar</button>
      </form>
      </>
    );
  }
  
  export default BlocoLado2;
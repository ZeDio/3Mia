function Forms(){
    return(
        <section className="forms" id="contato">
        <div className="fundo">
          <div className="img">
          </div>

                <form action="/cadastro" method="post" className="formPart">
                  <h2>Entre Em Contato</h2>

                    <div className="formGroup">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="formGroup">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" required/>
                    </div>
                    <button className="button" type="submit">Entrar</button>
                </form>
        </div>
      </section>
    )
}
export default Forms
function Forms(){
    return(
        <section class="forms" id="contato">
        <div class="fundo">
          <div class="img">
          </div>

                <form action="/cadastro" method="post" class="formPart">
                  <h2>Entre Em Contato</h2>

                    <div class="formGroup">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="formGroup">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" required/>
                    </div>
                    <button class="button" type="submit">Entrar</button>
                </form>
        </div>
      </section>
    )
}
export default Forms
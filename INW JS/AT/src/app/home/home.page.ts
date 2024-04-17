import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  pergunta1 = ''
  pergunta2 = ''
  pergunta3 = ''
  pergunta4 = ''
  pergunta5 = ''
  pergunta6 = ''
  pergunta7 = ''
  pergunta8 = ''
  pergunta9 = ''
  pergunta10 = ''
  pergunta11 = ''
  soma = 0
  resp = ''

  acertaranimal(){
    this.soma = parseInt(this.pergunta1)+parseInt(this.pergunta2)+parseInt(this.pergunta3)+parseInt(this.pergunta4)+parseInt(this.pergunta5)+parseInt(this.pergunta6)+parseInt(this.pergunta7)+parseInt(this.pergunta8)+parseInt(this.pergunta9)+parseInt(this.pergunta10)+parseInt(this.pergunta11)

    if(this.soma == 2100){
      this.resp = "leão"
    }
    else if(this.soma == 1550){
      this.resp = "baleia"
    }
    else if(this.soma == 21050){
      this.resp = "pinguim"
    }
    else if(this.soma == 2500){
      this.resp = "morcego"
    }
    else if(this.soma == 20200){
      this.resp = "aguia"
    }
    else if(this.soma == 20800){
      this.resp = "coruja"
    }
    else if(this.soma == 20600){
      this.resp = "coruja"
    }
    else{
      this.resp = "não existe"
    }
  }


}

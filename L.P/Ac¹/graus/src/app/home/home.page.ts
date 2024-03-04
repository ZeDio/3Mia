import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  graus=""
  res=0
  graus2=""
  res2=0

  converter(){
    this.res = ((parseFloat(this.graus)*9)+160)/5;
  }

  converter2(){
    this.res2 = (parseFloat(this.graus2)-32)*(5/9);
  }


}

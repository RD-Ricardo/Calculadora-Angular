import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultado = '';

  btn(num){
    let numero = this.resultado;
    this.resultado = numero + num;
  }

  limpar(){
    this.resultado =  '';
  }

  apagar(){
    let resultado  = this.resultado;
    this.resultado = resultado.substring(0,resultado.length -1)
  }

  calcular(){
    let resultado  = this.resultado;
    if(resultado){
      this.resultado = eval(resultado);
    }
  }
}

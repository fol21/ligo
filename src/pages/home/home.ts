import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: string;

  operadoras = [
    {
      nome: 'Oi',
      sinal: 50,
      preco3g: 10,
      selected: true,
      icone: "oi-icone"
    }, {
      nome: 'Tim',
      sinal: 30,
      preco3g: 12,
      selected: false,
      icone: "tim-icone"
    }, {
      nome: 'Claro',
      sinal: 40,
      preco3g: 9,
      selected: false,
      icone: "claro-icone"
    }, {
      nome: 'Vivo',
      sinal: 60,
      preco3g: 11,
      selected: false,
      icone: "vivo-icone"
    }];


  constructor(public navCtrl: NavController) {

  }

  select(index) {
    console.log(index);
    for(let i=0 ; i<this.operadoras.length ; i++ ){
      this.operadoras[i].selected = false;
    }
    this.operadoras[index].selected = true;
    console.log(this.operadoras);
  }
}

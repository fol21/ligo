import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

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
      icone: "oi_icone",
      servicos: ['4G', '3G', '2G']
    }, {
      nome: 'Tim',
      sinal: 30,
      preco3g: 12,
      selected: false,
      icone: "tim_icone",
      servicos: ['3G', '2G']
    }, {
      nome: 'Claro',
      sinal: 40,
      preco3g: 9,
      selected: false,
      icone: "claro_icone",
      servicos: ['4G', '3G']
    }, {
      nome: 'Vivo',
      sinal: 60,
      preco3g: 11,
      selected: false,
      icone: "vivo_icone",
      servicos: ['3G', '2G']
    }];

    boundary: any = 30;
    controle: boolean = true;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController) {

  }

  select(index) {
    console.log(index);
    for(let i=0 ; i<this.operadoras.length ; i++ ){
      this.operadoras[i].selected = false;
    }
    this.operadoras[index].selected = true;
    console.log(this.operadoras);
    const toast = this.toastCtrl.create({
      message: `Você mudou para a operadora ${this.operadoras[index].nome}`,
      duration: 2500
    });
    toast.present();

  }
}

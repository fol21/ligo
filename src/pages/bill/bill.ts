import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage implements OnInit{

  faturas = [
    {
      mes:'Junho',
      valor: '45,30',
      cor: 'passado'
    },
    {
      mes:'Julho',
      valor: '39,90',
      cor: 'passado'
    },
    {
      mes:'Agosto',
      valor: '43,55',
      cor: 'passado'
    },
    {
      mes:'Setembro',
      valor: '46,25',
      cor: 'passado'
    },
    {
      mes:'Outubro',
      valor: '51,90',
      cor: 'passado'
    },
    {
      mes:'Novembro',
      valor: '71,00',
      cor: 'passado'
    },
    {
      mes:'Dezembro',
      valor: '39,90',
      cor: 'anterior'
    },
    {
      mes:'Janeiro',
      valor: '28,30',
      cor: 'este'
    },
  ]

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.faturas.reverse();
  }

}

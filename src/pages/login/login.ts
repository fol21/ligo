import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { ToastController } from 'ionic-angular';


declare var firebase;

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuário inválido.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  signIn()
  {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (data) => {
          console.log(data);
            this.navCtrl.push(TabsPage);
      }).catch((err) =>{
        console.log(err);
        this.presentToast();
      });
  }

}

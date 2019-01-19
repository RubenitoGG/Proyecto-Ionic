import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  username: string;
  password: string;
  repeat: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.username = "";
    this.password = "";
    this.repeat = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar() {
    //#region comprobacionTexto
    // COMPROBAR SI LOS CAMPOS ESTÁN CUBIERTOS:
    if (this.username.length == 0 || this.password.length == 0 || this.repeat.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Need to cover all fields.',
        buttons: ['Dismiss']
      })

      alert.present();
    }
    // COMPROBAR SI LAS CONTRASEÑAS COINCIDEN:
    else if (this.password != this.repeat) {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Passwords do not match.',
        buttons: ['Dismiss']
      })

      alert.present();
    }
    // COMPROBAR SI EL NOMBRE TIENE MÁS DE 3 LETRAS:
    else if (this.username.length < 3) {
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'The name is too short.',
        buttons: ['Dismiss']
      })

      alert.present();
    }
    // COMPROBAR SI LA CONTRASEÑA TIENE MÁS DE 3 LETRAS:
    else if(this.password.length < 3){
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'The pass is too short.',
        buttons: ['Dismiss']
      })

      alert.present();
    }
    //#endregion
    else {
      // COMPROBAR SI EL USUARIO ESTÁ EN FIREBASE:

      // AÑADIR USUARIO:

      // MENSAJE DE USUARIO REGISTRADO Y CAMBIO DE PANTALLA:
      let alert = this.alertCtrl.create({
        title: 'Welcome!',
        subTitle: 'Usser added successfully.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }]
      })

      alert.present();
    }
  }
}

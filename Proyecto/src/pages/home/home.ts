import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { Usuario } from '../../models/usuario/usuario.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map, delay } from 'rxjs/operators';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { NotasPage } from '../notas/notas';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  username: string;
  password: string;

  listaUsuarios: Observable<Usuario[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase, public usuarios: UsuariosProvider, public alertCtrl: AlertController) {
    // EXTRAER LOS DATOS:
    this.listaUsuarios = this.usuarios
      .getUsserList() // Devuelve la DB LIST.
      .snapshotChanges() // Valores.
      .pipe(map(changes => {
        return changes.map(
          c => ({
            key: c.payload.key,
            ...c.payload.val(),
          })
        )
      }
      ))

    this.checkUsser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  numeroUsuarios: number;
  correcto: boolean;

  async goIn() {
    this.correcto = false;
    this.checkUsser()
    await this.delay(1);

    console.log(this.correcto);
    if (this.correcto) {
      this.navCtrl.setRoot(NotasPage)
      this.navCtrl.popToRoot();
    } else {
      // MENSAJE DE ENTRADA INCORRECTA:
      let alert = this.alertCtrl.create({
        title: 'Error:',
        subTitle: 'Usser/Password failed.',
        buttons: ['Dismiss']
      })

      alert.present();
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  checkUsser() {
    this.listaUsuarios.subscribe(usuarios => { this.numeroUsuarios = usuarios.length });
    for (let index = 0; index < this.numeroUsuarios; index++) {
      this.listaUsuarios.forEach(element => { // todos los usuarios.
        if (this.username == element[index].name && this.password == element[index].password)
          this.correcto = true;
      });
    }
  }


}

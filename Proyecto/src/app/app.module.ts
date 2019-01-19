import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { RegistroPage } from '../pages/registro/registro';

export const firebaseConfig = {
  apiKey: "AIzaSyCKqw4mrc6BNQcS4T6qgJmP4vJZv_Jiu3M",
    authDomain: "proyectoionic-3d1d0.firebaseapp.com",
    databaseURL: "https://proyectoionic-3d1d0.firebaseio.com",
    projectId: "proyectoionic-3d1d0",
    storageBucket: "proyectoionic-3d1d0.appspot.com",
    messagingSenderId: "835480014272"
};

@NgModule({
  declarations: [
    MyApp,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

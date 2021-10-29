import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth'
import{ AngularFirestoreModule} from '@angular/fire/compat/firestore';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



//env
import { environment } from '../environments/environment.prod';
//gurds
//service
import { AuthService } from './services/auth.service';

import { Drivers } from '@ionic/storage';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     IonicStorageModule.forRoot({
      name: 'myname',
      driverOrder: [Drivers.IndexedDB] // , Drivers.LocalStorage
    }),
      AppRoutingModule,
      FormsModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
     
      
      
    ],
  providers: [
    AuthService,
    SplashScreen,
    StatusBar,
   
   
    Storage,
    
      { provide: RouteReuseStrategy,useClass: IonicRouteStrategy }],
 bootstrap: [AppComponent],
})
export class AppModule {}

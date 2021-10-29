// app.component.ts
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  currentPageTitle = 'home';

  appPages = [
    
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Rechercher',
      url: '/search',
      icon: 'search'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage : Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  
}

// 1 import { Component } from '@angular/core';  
// import { MenuController } from '@ionic/angular';
// @Component({  
//    selector: 'app-root',  
//    templateUrl: 'app.component.html',  
//    styleUrls: ['app.component.scss']  
//  })  
//  export class AppComponent {

//   constructor(private menu: MenuController) { }
  
//     openFirst() {
//       this.menu.enable(true, 'first');
//       this.menu.open('first');
//     }
  
//     openEnd() {
//       this.menu.open('end');
//     }
  
//     openCustom() {
//       this.menu.enable(true, 'custom');
//       this.menu.open('custom');
//     }
//   }
//  export class AppComponent {  
//    navigate: any;  
//    constructor(   
//      private platform: Platform,  
//      private splashScreen: SplashScreen,  
//      private statusBar: StatusBar  
//    ) {   
//      this.sideMenu();  
//      this.initializeApp();  
//    }  
//    initializeApp() {  
//      this.platform.ready().then(() => {  
//        this.statusBar.styleDefault();   
//        this.splashScreen.hide();  
//      });  
//    }  
//    sideMenu() {  
//      this.navigate =   
//      [  
//          { 
//          title : 'App',
//          url   : '/apps',
//          icon  : 'apps' 
//          },
//        { 
//          title : 'Book',  
//          url   : '/book',  
//          icon  : 'book'  
//        },   
//        {  
//          title : 'Paint',  
//          url   : '/paint',  
//          icon  : 'brush'   
//        },  
//        {  
//          title : 'Contacts',  
//          url   : '/contacts',  
//          icon  : 'contacts'  
//        },   
//        {
//            title : 'Facebook',
//            url   : '/facebook.com',
//            icon  : 'logo-facebook'
//        },
//      ];  
//    }  
//  }   
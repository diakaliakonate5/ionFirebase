// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public name: any;
  public prenom: any;
  public phone: any;
  public email: any;
  

  constructor(
    private auth: AngularFireAuth, 
    private fire: AngularFirestore,
    public afauth : AngularFireAuth,
    private navCtrl : NavController
  ) {
    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
          this.name = result['name'];
          this.prenom = result['prenom'];
          this.email = result['email'];
          this.phone = result['phone'];
        });
      }
    });
  }
  ngOnInit() {
   }
  
    }

  
 
  



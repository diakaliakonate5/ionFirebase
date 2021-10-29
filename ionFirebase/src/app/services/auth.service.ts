import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import {switchMap } from 'rxjs/operators';
@Injectable()
export class AuthService 
{
  logoutUser() {
    throw new Error('Method not implemented.');
  }
 
  user$: Observable<User>;
  user: User;

  constructor(
    private afauth :AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl : LoadingController,
    private toastr : ToastController
  ) 
  { 
   this.user$ = this.afauth.authState.pipe(
     switchMap(user=>
      {
        if(user)
        {
        return this.afs.doc('users/${user.uid}').valueChanges();
        }else {
          return of(null);
        }
      }),
      
   );
  }//endconst
  async login(email, pass)
  {
    const loading = await this.loadingCtrl.create({
      message: 'authentification en cours...',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afauth.signInWithEmailAndPassword(email, pass).then((data)=>{
      if(data.user.emailVerified)  
      {
        
        // loading.dismiss();
        // this.toast('verifier votre mail', 'danger');
        // this.logout();
      }else{
        loading.dismiss();
          this.router.navigate(['/home'])
          
      }
    })
    
  }//enlogin
  
async logout(){
  this.afauth.signOut().then(()=>{
    this.router.navigate(['/login']);
  });

}
async toast(message, status)
{
  const toast = await this.toastr.create({
    message:message,
    position:'top',
    color: status,
    duration:2000
   });
   toast.present();
}//endtoast
async userDetails ()
 {     return this.afauth.user;   }

}
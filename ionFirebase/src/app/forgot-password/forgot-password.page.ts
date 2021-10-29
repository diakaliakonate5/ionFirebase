import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
   email: string;
  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
 async resetPassword()
 {
   if(this.email){
    const loading = await this.loadingCtrl.create()
    
this.afauth.sendPasswordResetEmail(this.email)
.then(()=>{

  loading.dismiss();
  this.toast('veuillez verifier votre mail','success');
  this.router.navigate(['/login']);

})
.catch((error)=>{
  this.toast(error.message, 'danger')
})

   }else{
     this.toast('votre mail svp', 'danger')
   }
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
   
 
}

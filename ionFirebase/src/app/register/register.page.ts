import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name : string;
  email : string;
  password : string
  confirmPassword : string
  passwordMatch: boolean
  prenom : string
  phone: number
  
  constructor(
    private afs: AngularFirestore,
    public afauth : AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router : Router
  ) { }

  ngOnInit() {


    
  }

  async register()
  {
    if(this.name && this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'chargement en cours...',
        spinner :'crescent',
        showBackdrop: true 
      });
       loading.present();
       this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=>{
         this.afs.collection('user').doc(data.user.uid).set({
           'userid' : data.user.uid,
           'prenom' : this.prenom,
           'name': this.name,
           'email': this.email,
           'createAt':Date.now(),
           'phone': this.phone
         });
         data.user.sendEmailVerification();
       })
       .then(()=>{
         loading.dismiss();
         this.toast('inscription faite avec succes', 'success');
         this.router.navigate(['/login']);
       })
       .catch((error)=>{
         loading.dismiss();
         this.toast(error.message, 'danger');
       })
    } else{
      this.toast('veuillez remplir correctement le formulaire', 'danger');
    }
  }//end of register
  // checkPassword()
  // {
  //   if(this.password == this.confirmPassword)
  //   {
  //     this.passwordMatch = true;
  //   }else{
  //     this.passwordMatch = false
  //   }
  // }
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message:message,
      position:'top',
      color: status,
      duration:2000
     });
     toast.present();
  }
}

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemsCollect: any;
  users : any

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore


  ) {
    this.getData()
  }
  logout()
  {
    this.afauth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }
  async getData(){
    this.itemsCollect= this.firestore.collection('user')
    this.itemsCollect.valueChanges().subscribe(
      (data)=>{
        this.users=data
      }
    )
  }
  items(items: any) {
    throw new Error('Method not implemented.');
  }
  collection(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  

}

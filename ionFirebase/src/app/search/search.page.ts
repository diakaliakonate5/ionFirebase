import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public userListe: any;
  public filterTerm: any;

  constructor(private db: AngularFirestore) {

    db.collection('user').valueChanges().subscribe(
      (res)=>{
        this.userListe = res;
      }
    )

  }
  ngOnInit() {
   
  }






}

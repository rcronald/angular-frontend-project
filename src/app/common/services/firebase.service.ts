import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getCustomer(customerKey){
    return this.db.collection('customers').doc(customerKey).snapshotChanges();
  }

  getCustomers(){
    return this.db.collection('customers').snapshotChanges();
  }

  createCustomer(value){
    return this.db.collection('customers').add({
      name: value.name,
      lastName: value.lastName,
      age: parseInt(value.age),
      dateOfBirth: value.dateOfBirth
    });
  }
}
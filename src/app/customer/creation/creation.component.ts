import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/model/customer.model';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { RestApiService } from 'src/app/common/services/rest-api.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  customer = {
    name: "",
    lastName: "",
    age: "",
    dateOfBirth: "",
  }
  submitted = false

  constructor(private datePipe:DatePipe, public router: Router, 
              public firebaseService: FirebaseService,
              public restApi: RestApiService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) { 
    
    this.restApi.createEmployee(this.customer).subscribe((data: {}) => {
      this.submitted = true
      this.firebaseService.createCustomer(f.value)
    })
    //console.log(f.value);
    //console.log(f.valid);
    //this.router.navigate(['/customer-list']);
  }
}

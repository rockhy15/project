import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  login:any;

  ngOnInit(): void {
    this.login = new FormGroup({ 
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
     "password":new FormControl(null,[Validators.required]),
  });
  }


submitData(){



   console.log(this.login.value);

}
   get emailid() {return this.login.get('emailid');}

get password(){return this.login.get('password');}
}
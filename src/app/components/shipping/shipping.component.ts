import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }
  login:any;

  ngOnInit(): void {
    this.login = new FormGroup({ 
      "fullname":new FormControl(null,[Validators.required]),
      "number":new FormControl(null,[Validators.required]),
      "landmark":new FormControl(null,[Validators.required]),
      "state":new FormControl(null,[Validators.required]),
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
     "password":new FormControl(null,[Validators.required]),
  });

  }
  
submitData(){



  console.log(this.login.value);

}
get fullname() {return this.login.get('fullname');}
get number() {return this.login.get('number');}
get landmark() {return this.login.get('landmark');}
get state() {return this.login.get('state');}
  get emailid() {return this.login.get('emailid');}

get password(){return this.login.get('password');}
}



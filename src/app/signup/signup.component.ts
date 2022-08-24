import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  login:any;

  ngOnInit(): void {
    this.login = new FormGroup({ 
      "fullname":new FormControl(null,[Validators.required]),
      "number":new FormControl(null,[Validators.required]),
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required]),
    });

}
submitData(){



  console.log(this.login.value);

}
get fullname() {return this.login.get('fullname');}
get number() {return this.login.get('number');}

  get emailid() {return this.login.get('emailid');}

get password(){return this.login.get('password');}
}




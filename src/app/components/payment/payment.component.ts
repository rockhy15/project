import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  public mss:boolean =false;
  public ma:boolean =false;
  

  
  ngOnInit(): void {
  }

  creation(){
    this.mss = true;
    

  }
  mention(){
    this.mss= false;
    this.ma =true;
  }
}


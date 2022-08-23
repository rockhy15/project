import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  public mssg:boolean =false;

  ngOnInit(): void {
  }

  create(){
    this.mssg = true;

  }
}

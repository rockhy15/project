import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  // public grandTotal !: number;
  constructor(private service : CartService) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(inventory=>{
      this.product = inventory;
      // this.grandTotal =this.service.getTotalPrice();
    })
  }
  removeCartItem(item : any){
    this.service.removeCartItem(item);

  }
  emptycart(){
    this.service.removeAllCart();
  }

  getTotalPrice(){
    this.service.getTotalPrice();
  }
  

  inc(item:any){

    this.service.inc(item);
  
  }
  
  dec(item:any){
  
  this.service.dec(item);
  
  }

}

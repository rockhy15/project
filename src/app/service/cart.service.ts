import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from '../components/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public inventory = new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.inventory.asObservable();
  
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.inventory.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.inventory.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total *a.quantity;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.inventory.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList =[]
    this.inventory.next(this.cartItemList);
  }
  inc(item:any){
    this.cartItemList.map((a:any, quantity:any)=>{
      if(item.id === a.id){
        quantity +=item.quantity
        this.cartItemList.quantity.push(quantity)
      }
      return quantity;
    })
    this.inventory.next(this.cartItemList)
    // console.log(item);
  //   let quantity = 1;
  //   if(item.quantity){
  //  quantity = item.quantity+=1;
  //  this.cartItemList.push(quantity);
  // }
  // return quantity;
    }
    
    dec(item:any) {
    
      if(item.quantity!=1){  // console.log(item);
    
    item.quantity-=1;
    
    }
  }
  }

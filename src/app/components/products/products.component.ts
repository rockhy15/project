import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  public inventory:any;
  public filterSection : any;
   searchKey:string="";
  constructor(private service:ContainerService, private cartService : CartService) { }


  ngOnInit(): void {
    this.inventory=this.service.searchItems;
    
    this.filterSection =this.inventory ;
    this.inventory.forEach((a:any )=> {
      if(a.section ==="Cars"  ){
        a.section="Cars"
      }
        if(a.section ==="Cars"  ){
          a.section="Cars"
          
      }
      Object.assign(a,{quantity:1,total:a.price});
    });  
  
    this.cartService.search.subscribe((val)=>{
    this.searchKey =val;
  });
};

addtocart(item: any){
  this.cartService.addtoCart(item);
  
  }
  filter(section:string){
   this.filterSection = this.inventory
   .filter((a:any)=>{
    if(a.section == section || section=='')
    return a;
   })
  }
  
}


import { Injectable } from '@angular/core';

import {Product} from './model/produit.model';
import {ItemProduct} from './model/item-product.model';
import {Client} from './model/client.model';
import {Caddy} from './model/caddy.model';

@Injectable({
  providedIn: 'root'
})
export class CaddieService {

   public LocalStorage: Storage;


  constructor() {
    let caddy=new Caddy(this.caddyname);
    this.caddies.set(this.caddyname,caddy);
    }
  caddyname:string="MonPanier"
    public caddies:Map<string, Caddy>= new Map();

    addPanier(id:number,designation:string,price:number,quantite:number):void{
      let caddy=this.caddies.get(this.caddyname);
      let productItem:ItemProduct=caddy.items.get(id);
      if(productItem){
        productItem.quantite+=quantite;
      }
      else{
        productItem=new ItemProduct();
        productItem.price=price;
        productItem.quantite=quantite;
        productItem.id=id;
        productItem.designation=designation;
        caddy.items.set(id,productItem);
      }
    }

    public saveCaddies(){
      this.LocalStorage.setItem("Panier_"+this.caddyname,JSON.stringify(this.caddies));
    }

    public getCaddy():Caddy{
        return this.caddies.get(this.caddyname);
      }

    public getTotal():number{
      let total=0;
      let inter=0;
      let items:IterableIterator<ItemProduct>=this.getCaddy().items.values();
      for(let pi of items){
        inter=pi.quantite*pi.price;
        total+=inter;
      }
      return total;
    }

    public setClient(client:Client){
      this.getCaddy().client=client;
    }

    removeProduit(id:number):void{
      let caddy=this.caddies[this.caddyname];
       caddy.items.delete(id);
    }
}

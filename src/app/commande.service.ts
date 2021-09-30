import { Injectable } from '@angular/core';

import{CaddieService} from './caddie.service';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/produit.model';
import {ItemProduct} from './model/item-product.model';
import {Client} from './model/client.model';
import {Caddy} from './model/caddy.model';
import {Commande} from './model/commande.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  public commande:Commande=new Commande();

  constructor(private httpClient:HttpClient, public cadservices:CaddieService) { }

  public setClient(client:Client){
    this.commande.client=client;
  }

  public loadProduct(){
    this.commande.products=[];
    for(let key in this.cadservices.getCaddy().items.values()){
      this.commande.products.push(this.cadservices.getCaddy().items.values()[key]);
    }
  }

  public getTotal():number{
      let total:number=0;
      this.commande.products.forEach(p=>{
        total+=p.price*p.quantite;
      });
      return total;
    }

  submitOrder(){
    return this.httpClient.post("http://localhost:8083/commandes",this.commande);
  }

  public getOrder(id:number):Observable<Commande>{
    return this.httpClient.get<Commande>("localhost:8083//fullcommands/"+id);

 }

}

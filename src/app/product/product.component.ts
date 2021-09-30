import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Product} from '../model/produit.model';
import {ItemProduct} from '../model/item-product.model';
import {Client} from '../model/client.model';
import {Caddy} from '../model/caddy.model';
import {LoginComponent} from '../login/login.component';
import{CaddieService} from '../caddie.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public produits;
  public size:number=4;
  public page:number=0;
  public totalpages:number;
  public pages:Array<number>;
  public currentmotcle:string="";
  constructor(private httpClient:HttpClient, public cadservice:CaddieService) {

  }

  ngOnInit(): void {
    this.getproduits();
  }

  getproduits(){
    this.httpClient.get("http://localhost:8888/PRODUITS/produits?page="+this.page+"&size="+this.size)
      .subscribe(data=>{
        this.totalpages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalpages);
        this.produits=data;
      },err=>{
        console.log(err);
      })
  }

  onPage(i){
    this.page=i;
    this.onChercher({motcle:this.currentmotcle});
  }

  onChercher(form:any){
    this.currentmotcle=form.motcle;
    this.httpClient.get("http://localhost:8888/PRODUITS/produits/search/parDesignationPage?mc="+form.motcle+"&page="+this.page+"&size="+this.size)
          .subscribe(data=>{
            this.totalpages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalpages);
            this.produits=data;
          },err=>{
            console.log(err);
          })
  }
  addPanier(product:Product){
    this.cadservice.addPanier(product.id,product.designation,product.price,product.quantite);
  }

  panier(){

  }
}

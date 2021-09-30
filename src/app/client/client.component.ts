import { Component, OnInit } from '@angular/core';

import{CaddieService} from '../caddie.service';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/produit.model';
import {ItemProduct} from '../model/item-product.model';
import {Client} from '../model/client.model';
import {Caddy} from '../model/caddy.model';
import {Commande} from '../model/commande.model';
import {Observable} from 'rxjs';
import { Router} from '@angular/router';
import {CommandeService} from '../commande.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public mode:number=0;
  panelStyle:string="panel-default";
  constructor(private httpClient:HttpClient, public cadservices:CaddieService,
              private router:Router, public commandeser:CommandeService) { }

  ngOnInit(): void {
    this.onOrder();
  }

   saveClient(client:Client){
    this.commandeser.setClient(client);
    this.commandeser.loadProduct();
    this.mode=1;
   }

   onOrder(){
    this.commandeser.submitOrder()
      .subscribe(data=>{
        this.commandeser.commande.id=data['id'];
        this.commandeser.commande.date=data['date'];
       this.panelStyle="panel-succes";
    },err=>{
      console.log(err);
    });
   }

}

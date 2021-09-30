import { Component, OnInit } from '@angular/core';
import{CaddieService} from '../caddie.service';
import { Router} from '@angular/router';
import {ItemProduct} from '../model/item-product.model';
import {Caddy} from '../model/caddy.model';


@Component({
  selector: 'app-cadie',
  templateUrl: './cadie.component.html',
  styleUrls: ['./cadie.component.css']
})
export class CadieComponent implements OnInit {

  public caddy:Caddy;
  constructor(public cadiService:CaddieService, private router:Router) { }

  ngOnInit(): void {
    this.caddy=this.cadiService.getCaddy();
    console.log(this.caddy);
  }

  onSave(){
  this.router.navigateByUrl("/client");
  }
  removeProduitFromPanier(p:ItemProduct){
    this.cadiService.removeProduit(p.id);
  }

}

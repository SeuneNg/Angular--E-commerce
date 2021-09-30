import {ItemProduct} from './item-product.model';
import {Client} from './client.model';

export class Caddy{
  public items: Map<number,ItemProduct>=new Map();
  public client:Client;
  constructor(public name:string){
    this.name=name;
  }
}

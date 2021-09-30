import {ItemProduct} from './item-product.model';
import {Client} from './client.model';
import {Product} from './produit.model';

export class Commande{
  public id:number;
  public client:Client={nom:"",prenom:"",adresse:"",tel:"",email:""};
  public products:Array<ItemProduct>=[];
  public total:number;
  public date:Date;
}

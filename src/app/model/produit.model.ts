export interface Product{
    id:number;
    designation:string;
    description:string;
    price:number;
    filename:string;
    quantite:number;
    _links:{
      self:{
        href:string
      },
      produit:{
        href:string
      }
    }

}

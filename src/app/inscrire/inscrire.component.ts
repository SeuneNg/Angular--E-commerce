import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {

  public client;
  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveClient(data:any){
    this.httpClient.post("http://localhost:8081/clients",data)
      .subscribe(res=>{
        this.router.navigateByUrl("/product");
      },err=>{
        console.log(err);
      })
  }
}

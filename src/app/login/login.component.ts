import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ToastrModule} from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public client;
  public mdp:String;
  public email:String;
  constructor(private httpClient:HttpClient, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(form:any){
      this.httpClient.get("http://localhost:8081/parEmail/"+form.email)
        .subscribe(data=>{this.client=data;
          if(this.client.mdp==form.mdp)
          {
            this.router.navigateByUrl("/product");
          }
          else{
            this.toastr.warning("Mot de passe incorrect")
          }
        },err=>{
          console.log(err);
        })
    }
}

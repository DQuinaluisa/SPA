import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private token:  TokenService,
               private router: Router
    ) { }

  ngOnInit(): void {
  }

  tokenJwt: any;
  nickname: any;
  passw: any;

  ingresar(event){
    let  data = {
    "usuario" : {
      "nickname" : this.nickname,
      "passw" :  this.passw
    }
    }
    if(event.keyCode === 13)
    {
    this.token.login(data).subscribe(
      response => {
      
        this.tokenJwt =response[ 'token' ];
        //console.log(response);
        localStorage.setItem("guardarToken", this.tokenJwt);
        //console.log(localStorage.getItem("guardarToken"));
        this.router.navigate(['/estudiantes']);
       
       }, 
      error => {
        alert("No estas registrado")
        console.log('No vale');
      }
    )  
  }
}   

pass(){
  let  data = {
  "usuario" : {
    "nickname" : this.nickname,
    "passw" :  this.passw
  }
  }
 
  this.token.login(data).subscribe(
    response => {
    
      this.tokenJwt =response[ 'token' ];
      //console.log(response);
      localStorage.setItem("guardarToken", this.tokenJwt);
      //console.log(localStorage.getItem("guardarToken"));
      this.router.navigate(['/estudiantes']);
     

     }, 
    error => {
      alert("No estas registrado")
      console.log('No vale');
    }
  )  

}   


}

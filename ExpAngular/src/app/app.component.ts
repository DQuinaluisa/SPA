import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  prueba(){
    localStorage.removeItem("guardarToken");
    console.log(localStorage.getItem("guardarToken"));
  }

  title = 'ExpAngular';
}

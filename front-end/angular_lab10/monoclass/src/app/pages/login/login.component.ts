import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string;
  username:string;
  constructor() { }

  ngOnInit(): void {

  }

  login(){
    console.log("login:", this.username, this.password)
  }

}

import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string;
  email:string;
  constructor(
    private participantService:ParticipantService,
    private router:Router) { }

  ngOnInit(): void {

  }

  login(){
    console.log("login:", this.email, this.password)
    this.participantService.login(this.email, this.password).subscribe(participant => {
      console.log("loged in as: ", JSON.stringify(participant[0]));
      sessionStorage.setItem('participant', JSON.stringify(participant[0]));
      this.router.navigate(['/travaux']);
    });
  }

}

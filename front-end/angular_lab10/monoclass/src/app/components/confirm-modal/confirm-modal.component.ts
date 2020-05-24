import { Component, OnInit, Input } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  public message:string;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  confirm(){
    this.activeModal.close(true);
  }

  cancel(){
    this.activeModal.close(false);
  }
  
}

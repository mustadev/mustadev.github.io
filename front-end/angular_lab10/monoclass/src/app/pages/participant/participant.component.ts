import { Component, OnInit, NgModuleRef } from '@angular/core';
import  Participant  from "src/app/models/Participant";
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddParticipantComponent } from 'src/app/components/add-participant/add-participant.component';
import { ParticipantService } from 'src/app/services/participant.service';
import { EditParticipantComponent } from 'src/app/components/edit-participant/edit-participant.component';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  // participants:Participant[] = [
  //   new Participant(0, "max", "plank", 88, "max@palnk.com", "0666666611"),
  //   new Participant(1,  "neils","bohr",  77, "neils@bohr.com", "0766666611"),
  //   new Participant(2, "rick", "morty", 88, "rick@morty.com", "0555666611"),
  //   new Participant(3,  "jon","wick",  77, "jon@wick.com", "0788666611"),
  //   new Participant(4, "tony", "ferguson", 88, "tony@ferguson.com", "0758666611"),
  //   new Participant(5,  "hommer","simpson",  77, "hommer@simpson.com", "0766666611"),
  // ]

  participants:Participant[];
  
  providers: [NgbModalConfig, NgbModal]
  constructor(
    private participantService:ParticipantService,
    config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  addParticipant() {
    const modalRef = this.modalService.open(AddParticipantComponent);
    modalRef.result.then( participant => {
      console.log("result of module", participant);
      //this.participants.push(participant);
    })
  }

  deleteParticipant(id:number){
    this.participantService.deleteParticipant(id).subscribe(() => {
      console.log("paricipant ", id, "deleted");
    })
  }

  editParticipant(id:number){
    console.log("edit user id: ", id);
    let participant = this.participants.find((part) => part.id === id);
    console.log("edit participant: ", JSON.stringify(participant))
    if (participant === undefined){
      console.log("can't find participant ", id);
      return
    }

    const modalRef = this.modalService.open(EditParticipantComponent);
    modalRef.componentInstance.participant = participant 
    modalRef.result.then( participant => {
      console.log("result edit module", participant);
      //this.participants.push(participant);
    })
  }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participants:Participant[]) => {
      this.participants = participants;
      console.log("Participant: ", JSON.stringify(this.participants));
    });
   
  }

}
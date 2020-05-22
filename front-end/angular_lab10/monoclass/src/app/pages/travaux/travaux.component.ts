import { Component, OnInit } from '@angular/core';
import Devoir from 'src/app/models/devoir';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevoirService } from 'src/app/services/devoir.service';
import { AddDevoirComponent } from 'src/app/components/add-devoir/add-devoir.component';
import { EditDevoirComponent } from 'src/app/components/edit-devoir/edit-devoir.component';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent implements OnInit {
  
  devoirs:Devoir[];
  providers: [NgbModalConfig, NgbModal]
  constructor(
    private devoirService:DevoirService,
    config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  addDevoir() {
    const modalRef = this.modalService.open(AddDevoirComponent);
    modalRef.result.then( Devoir => {
      console.log("result of module", Devoir);
      //this.Devoirs.push(Devoir);
    })
  }

  deleteDevoir(id:number){
    this.devoirService.deleteDevoir(id).subscribe(() => {
      console.log("paricipant ", id, "deleted");
    })
  }

  editDevoir(id:number){
    console.log("edit user id: ", id);
    let devoir = this.devoirs.find((part) => part.id === id);
    console.log("edit Devoir: ", JSON.stringify(Devoir))
    if (devoir === undefined){
      console.log("can't find Devoir ", id);
      return
    }

    const modalRef = this.modalService.open(EditDevoirComponent);
    modalRef.componentInstance.devoir = devoir 
    modalRef.result.then( Devoir => {
      console.log("result edit module", Devoir);
      //this.Devoirs.push(Devoir);
    })
  }
// generate Youtube Embeded Url
  getYtbEmbedUrl(ytbUrl:string):string {
    let videoUrl = ytbUrl.split('=')[1];
    console.log("video Url id: ", videoUrl);
    videoUrl = "https://www.youtube.com/embed/" + videoUrl;
    console.log("video Url: ", videoUrl);
    return videoUrl;
  }

  ngOnInit(): void {
    this.devoirService.getDevoirs().subscribe((devoirs:Devoir[]) => {
      this.devoirs = devoirs;
      console.log("Devoir: ", JSON.stringify(this.devoirs));
    });
   
  }

}

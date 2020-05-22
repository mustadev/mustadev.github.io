import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { TravauxComponent } from './pages/travaux/travaux.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { AddDevoirComponent } from './components/add-devoir/add-devoir.component';
import { EditDevoirComponent } from './components/edit-devoir/edit-devoir.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DiscussionComponent,
    TravauxComponent,
    ParticipantComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    AddDevoirComponent,
    EditDevoirComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

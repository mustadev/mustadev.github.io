import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { TravauxComponent } from './pages/travaux/travaux.component';
import { ParticipantComponent } from './pages/participant/participant.component';


const routes: Routes = [
  { path: '', redirectTo: '/discussion',pathMatch: 'full'},
  { path: 'discussion', component: DiscussionComponent},
  { path: 'travaux', component: TravauxComponent},
  { path: 'participant', component: ParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

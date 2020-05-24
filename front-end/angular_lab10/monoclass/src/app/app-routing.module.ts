import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { TravauxComponent } from './pages/travaux/travaux.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ParticipantGuard } from './services/participant.guard';


const routes: Routes = [
  { path: '', redirectTo: '/travaux',pathMatch: 'full'},
  { path: 'discussion', component: DiscussionComponent, canActivate: [ParticipantGuard]},
  { path: 'travaux', component: TravauxComponent, canActivate: [ParticipantGuard]},
  { path: 'participant', component: ParticipantComponent, canActivate: [ParticipantGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

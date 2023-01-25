import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailpersonComponent } from './detailperson/detailperson.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MoukhazanaComponent } from './moukhazana/moukhazana.component';
import { NewDemandComponent } from './new-demand/new-demand.component';
import { ReglesComponent } from './regles/regles.component';
import { StatsComponent } from './stats/stats.component';
import { TestttComponent } from './testtt/testtt.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'newDemand', component: NewDemandComponent},
  {path: 'listDemand', component: ListComponent},
  {path: 'statsDemand', component: StatsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'testt', component: TestttComponent},
  {path: 'droit', component: ReglesComponent },
  {path: 'moukhazana', component: MoukhazanaComponent },
  {path: 'details/:cin', component: DetailpersonComponent},
  {path: 'accueil', component: AccueilComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

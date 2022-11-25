import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewDemandComponent } from './new-demand/new-demand.component';
import { StatsComponent } from './stats/stats.component';
import { TestttComponent } from './testtt/testtt.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'newDemand', component: NewDemandComponent},
  {path: 'listDemand', component: ListComponent},
  {path: 'statsDemand', component: StatsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'testt', component: TestttComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

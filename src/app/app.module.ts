import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { NewDemandComponent } from './new-demand/new-demand.component';
import { StatsComponent } from './stats/stats.component';
import { UsersComponent } from './users/users.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerInput, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestttComponent } from './testtt/testtt.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewDemandComponent,
    StatsComponent,
    UsersComponent,
    TestttComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

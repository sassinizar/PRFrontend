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
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoukhazanaComponent } from './moukhazana/moukhazana.component';
import { ReglesComponent } from './regles/regles.component';
import { MissionComponent } from './mission/mission.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgModule, AfterViewInit, Component, ViewChild } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailpersonComponent } from './detailperson/detailperson.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewDemandComponent,
    StatsComponent,
    UsersComponent,
    TestttComponent,
    LoginComponent,
    MoukhazanaComponent,
    ReglesComponent,
    MissionComponent,
    DetailpersonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule  ,
    DialogModule ,
    MatPaginatorModule, 
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

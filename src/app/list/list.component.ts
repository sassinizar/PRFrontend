import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Personne } from '../model/personne';
import { PersonneService } from '../services/personne.service';
import { MissionComponent } from '../mission/mission.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailpersonComponent } from '../detailperson/detailperson.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

cin: any;  
mission: any; 
personnes: any;
personne! : Personne;
totalLength: any;
pageNumber: Number = 1;
page: number = 1;



  constructor(private personneService: PersonneService, 
     private dialog: MatDialog,
     private router: Router,
     private missionService: MissionService
    ) { }

  ngOnInit(): void {
      this.getPersons();
  }

// open the dialog mission component
  openMissionDialog(cin: number){
    let dialogRef = this.dialog.open(MissionComponent, {
      width : "80%",
      height: "70%",
      data :{
           cin
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    
      const dialogSubmitSubscription = 
      dialogRef.componentInstance.submitClicked.subscribe(result => {
      dialogSubmitSubscription.unsubscribe();
    });
    
   
  }

//the details of person
  personDetails(cin: number){
    this.router.navigate(['details', cin])
  }

//get all the persons
  private getPersons(){
    this.personneService.getPersonsList().subscribe(data => {
      this.personnes = data ; 
      this.totalLength = data.length;   
    }
      )
  }

//search a person
  public searchPersons(key: string): void {
    console.log(key);
    const result: Personne[] = [];
    for (const personne of this.personnes) {
      if (
      personne.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || personne.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
    
         ) {
        result.push(personne);
        const a = result.length;
      }
    }
    this.personnes = result;
    if (result.length === 0 || !key) {
      this.getPersons();
    }
  }

//delete a person
  deletePersonne(id: number){
    this.personneService.deletePerson(id).subscribe(data => {
      console.log(data);
      this.getPersons();
    });
  }

}

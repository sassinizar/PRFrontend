import { ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Mission } from '../mission';
import { Personne } from '../personne';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  cin!: number;
  missionGroup!: FormGroup;
  mission= new Mission();

  @Output() submitClicked = new EventEmitter<any>();
  
  constructor(private missionService: MissionService, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<MissionComponent>,
    private changeDetector: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any ) 
  { }

  ngOnInit(): void {
    this.missionGroup = this.formBuilder.group({
      numOrd : [''],
      dateDebut : [''],
      dateFin : [''],
      destination :[''],
      motif : ['']
    })
  }

  //save the mission
  saveMission(){   

    this.mission.numOrd = this.missionGroup.value.numOrd;
    this.mission.dateFin = this.missionGroup.value.dateFin;
    this.mission.dateDebut = this.missionGroup.value.dateDebut;
    this.mission.destination = this.missionGroup.value.destination;
    this.mission.motif = this.missionGroup.value.motif;

    this.missionService.createMission(this.data.cin, this.mission);
  
     // alert(' تم الحفظ');
      this.submitClicked.emit(this.mission);
} 

 onCancel(){
  this.dialogRef.close();
 }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}

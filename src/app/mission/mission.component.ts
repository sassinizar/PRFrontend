import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  missionGroup!: FormGroup;

  constructor(private missionService: MissionService, private router: Router, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<MissionComponent>) 
  { }

  ngOnInit(): void {
    this.missionGroup = this.formBuilder.group({
      numord : ['',Validators.required],
      dateDebut : ['',Validators.required],
      dateFin : ['',Validators.required],
      destination :['',Validators.required],
      sujet : ['',Validators.required],
      cin :['',Validators.required]
    })
  }
  
  saveMission(){   
    this.missionService.createMission(this.missionGroup.value).subscribe({
           next:(res)=>{
               alert("تمت إضافة ");
               this.missionGroup.reset(); 
               this.dialogRef.close('save');
               }
           },)
   }  
}

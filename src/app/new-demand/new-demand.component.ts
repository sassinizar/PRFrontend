import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-new-demand',
  templateUrl: './new-demand.component.html',
  styleUrls: ['./new-demand.component.css']
})
export class NewDemandComponent implements OnInit {
personGroup!: FormGroup;
  constructor(private personneService: PersonneService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personGroup = this.formBuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      cin: ['',Validators.required],
      direction :['',Validators.required],
      fonction: ['',Validators.required],
    })
   
  }
 
 
  savePerson(){   
    this.personneService.createPerson(this.personGroup.value).subscribe({
           next:(res)=>{
               alert("تمت إضافة ");
               this.personGroup.reset(); 
               this.router.navigate(['/listDemand']);
               }
           },)
   }   
 
}

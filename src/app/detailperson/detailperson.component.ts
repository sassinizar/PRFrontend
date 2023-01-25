import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../mission';
import { Passeport } from '../passeport';
import { Personne } from '../personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-detailperson',
  templateUrl: './detailperson.component.html',
  styleUrls: ['./detailperson.component.css']
})
export class DetailpersonComponent implements OnInit {

  cin!: number;
  personne!: Personne;
  missions!: Mission[];
  passeports!:Passeport[];

  constructor(private personneService: PersonneService, private route: ActivatedRoute) { }


ngOnInit(): void {

  this.cin = this.route.snapshot.params['cin'];
  this.personne = new Personne();

  this.personneService.getPersonById(this.cin).subscribe( data => {
    this.personne = data;
    console.log(this.personne);

  })

  this.personneService.getMissionByPerson(this.cin).subscribe( data => {
    this.missions = data;
    console.log(this.missions);
  })

  this.personneService.getPasseportsByPerson(this.cin).subscribe( data => {
    this.passeports = data;
    
  })
  }

}

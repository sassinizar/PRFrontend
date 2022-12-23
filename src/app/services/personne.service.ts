import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mission } from '../mission';
import { Passeport } from '../model/passeport';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService  {
  private baseURL="http://localhost:8080/api/v1/personnes";

  constructor(private httpClient: HttpClient) {

   }

   getPersonsList(): Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(`${this.baseURL}`);
  };

  createPerson(personne: Personne): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,personne)
  }

  getPersonById(cin: number): Observable<Personne>{
    return this.httpClient.get<Personne>(`${this.baseURL}/${cin}`);
  }

  getMissionByPerson(cin: number): Observable<Mission[]>{
    return this.httpClient.get<Mission[]>(`${this.baseURL}/${cin}/missions`)
  }

  getPasseportsByPerson(cin: number): Observable<Passeport[]>{
    return this.httpClient.get<Passeport[]>(`${this.baseURL}/${cin}/passeports`)
  }
  
  updatePerson(id: number, personne: Personne): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, personne);
  }

  deletePerson(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mission } from '../mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private baseURL="http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) {

   }

   getMissionList(): Observable<Mission[]>{
    return this.httpClient.get<Mission[]>(`${this.baseURL}`);
  };

  createMission(cin: number, mission: Mission){
    return this.httpClient.post(`${this.baseURL}/personne/${cin}/mission`,mission)
    .pipe(map((res: any)=>{
      return res;
    }))
    console.log(mission)
  }

  getMissionById(id: number): Observable<Mission>{
    return this.httpClient.get<Mission>(`${this.baseURL}/${id}`);
  }

  updateMission(id: number, mission: Mission): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, mission);
  }

  deleteMission(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Devoir from '../models/devoir';

const Devoir_URL = "http://localhost:3000/devoirs"
@Injectable({
  providedIn: 'root'
})
export class DevoirService {
  constructor(private http:HttpClient) { }

  getDevoirs():Observable<Devoir[]>{
    return this.http.get<Devoir[]>(Devoir_URL);
  }

  getDevoir(id:number):Observable<Devoir>{
    return this.http.get<Devoir>(Devoir_URL + "/" + id);
  }

  addDevoir(devoir:Devoir):Observable<Devoir>{
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.post<Devoir>(Devoir_URL, devoir, {headers: headers});
  }

  deleteDevoir(id:number):Observable<any>{
    return this.http.delete(Devoir_URL + "/" + id);
  }

  updateDevoir(devoir:Devoir):Observable<Devoir>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .put<Devoir>(Devoir_URL + "/" + devoir.id, devoir, {headers: headers});
  }
}

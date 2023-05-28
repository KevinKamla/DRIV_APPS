import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http: HttpClient) { }
  public url = "http://10.0.0.35:9191"; //10.0.0.35

}

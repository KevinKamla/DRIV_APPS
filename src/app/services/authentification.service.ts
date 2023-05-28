import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private apiService: ApiService) { }

  private AUTH_url =  this.apiService.url+'/AUTH-SERVICE/api/';

  get(endpoint: string) {
    const url = this.AUTH_url + endpoint;
    return this.apiService.http.get(url, { observe: 'response' });
  }  
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private apiService: ApiService) { }

  private CONDUCTOR_url =  this.apiService.url+'/CONDUCTOR-SERVICE/api/';

  get(endpoint: string) {
    const url = this.CONDUCTOR_url + endpoint;
    return this.apiService.http.get(url, { observe: 'response' });
  }

  post(endpoint: string, body: any) {
    const url = this.CONDUCTOR_url + endpoint;
    return this.apiService.http.post(url, body, { observe: 'response' });
  }
  
}

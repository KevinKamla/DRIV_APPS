import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private apiService: ApiService) { }
  
  private PASSENGER_url =  this.apiService.url+'/PASSENGER-SERVICE/api/';

  get(endpoint: string) {
    const url = this.PASSENGER_url + endpoint;
    return this.apiService.http.get(url, { observe: 'response' });
  }

  post(endpoint: string, body: any) {
    const url = this.PASSENGER_url + endpoint;
    return this.apiService.http.post(url, body, { observe: 'response' });
  }
}

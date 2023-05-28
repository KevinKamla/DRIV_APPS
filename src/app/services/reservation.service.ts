import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private apiService: ApiService) { }
  
  private RESERVATION_url =  this.apiService.url+'/RESERVATION-SERVICE/api/';

  get(endpoint: string) {
    const url = this.RESERVATION_url + endpoint;
    return this.apiService.http.get(url, { observe: 'response' });
  }

  post(endpoint: string, body: any) {
    const url = this.RESERVATION_url + endpoint;
    return this.apiService.http.post(url, body, { observe: 'response' });
  }
  
}

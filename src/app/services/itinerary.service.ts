import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import '@capacitor-community/http';
import { isPlatform } from '@ionic/angular';
import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private apiService: ApiService) { }

  private ITINERARY_url =  this.apiService.url+'/ITINERARY-SERVICE/api/';

  get(endpoint: string) {
    const url = this.ITINERARY_url + endpoint;
    return this.apiService.http.get(url, { observe: 'response' });
  }

  async getRequest(endpoint: string){
    if(isPlatform('capacitor')){
      alert("plateformes capacitor");
      const options = {
        url: this.ITINERARY_url + endpoint,
        headers: { 'Content-Type': 'application/json' }
      };
      const response: HttpResponse = await Http.get(options);
      return response;
    }
    else{
      const options = {
        url: this.ITINERARY_url + endpoint,
        headers: { 'Content-Type': 'application/json' }
      };
      const response: HttpResponse = await Http.get(options);
      return response;
    }
  }

  post(endpoint: string, body: any) {
    const url = this.ITINERARY_url + endpoint;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Exemple d'en-tête Content-Type
      'Authorization': 'Bearer your_token' // Exemple d'en-tête Authorization
    });
    return this.apiService.http.post(url, body, {headers});
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ItineraryService } from 'src/app/services/itinerary.service';
import { Storage } from '@ionic/storage-angular';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.page.html',
  styleUrls: ['./trajets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class TrajetsPage implements OnInit {
  
  itineraryList: any;

  constructor(
    private modal: ModalController,
    private itineraryService: ItineraryService,
    private storage: Storage
    ) { 
      this.init();
    }

  isToastOpen: boolean = false;
  user_note: number = 3;
  user: any = null;


  searchForm = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    date: new FormControl(),
  });

  async init() {
    await this.storage.create();
    await this.storage.get('user').then((response)=>{
      this.user = response;
    });
  }

  async ngOnInit(){
    this.itineraryService.get('itinerary').subscribe((response: HttpResponse<any>) => {
      this.itineraryList = response.body;
    });

    /*this.itineraryService.getRequest('itinerary').then((response) => {
      console.log('Réponse de la requête GET :', response);
    })
    .catch( (error) => {
      console.error('Erreur lors de la requête GET :', error);
    })*/
  }



  closeModal() {
  }

  Searche() {
    this.modal.dismiss();
  }
  
  reserver() {
    this.openToast(true);
  }

  openToast(value: boolean) {
    this.isToastOpen = value
  }

  

}

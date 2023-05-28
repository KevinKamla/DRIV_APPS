import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AnimationController, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { PassengerAnnounceService } from 'src/app/services/passenger-announce.service';
import { Storage } from '@ionic/storage-angular';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class AnnoncesPage implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private modal: ModalController,
    private passengerAnnounceService: PassengerAnnounceService,
    private storage: Storage
  ) { 
    this.init();
  }

  type: string = "Annonces";
  isToastOpen: boolean = false
  isToastOpenPropo: boolean = false
  nbPlace: number = 1;
  announcesList: any; 
  user: any = null;

  async init() {
    await this.storage.create();
    await this.storage.get('user').then((response)=>{
      this.user = response;
    });
  }

  ngOnInit(){
    this.passengerAnnounceService.get('passengerAnnounce').subscribe((response: HttpResponse<any>) => {
      this.announcesList = response.body;
    });
  }

  searchForm = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    date: new FormControl(),
  });

  propoForm = new FormGroup({
    prix: new FormControl(),
    commentaire: new FormControl(),
  });

  

  Search() {
    this.modal.dismiss();
  }
 
  participerCovoiturage() {
    this.openToast(true);
      this.nbPlace += 1;
  }
  
  propositionForm() {
    this.modal.dismiss();
    this.openToastPropo(true);
  }

  // ====================================== les toasts =================================
  openToast(value: boolean) {
    this.isToastOpen = value;
  }

  openToastPropo(value: boolean) {
    this.isToastOpenPropo = value;
  }

  // =================== Annimation des modals ============================

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}

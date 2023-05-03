import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-trajets',
  templateUrl: './create-trajets.page.html',
  styleUrls: ['./create-trajets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class CreateTrajetsPage implements OnInit {

  @ViewChild('dateDepart') dateDepart: any;
  @ViewChild('dateArrive') dateArrive: any;

  constructor(
    private alertCtrl: AlertController
  ) { }


  nombrePlace: number = 0;
  isToastOpen: boolean = false
  myGroup = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    dateDepart: new FormControl(),
    heureDepart: new FormControl(),
    minuteDepart: new FormControl(),
    dateArrive: new FormControl(),
    heureArrive: new FormControl(),
    minuteArrive: new FormControl(),
    prix: new FormControl(),
    commentaire: new FormControl()
  });

  segmentChanged(e: any) {
    console.log("Besoin de retour : ", e.detail.value)
  }

  placeSubs() {
    if (this.nombrePlace > 0) {
      this.nombrePlace -= 1
    }
  }
  placeAdd() {
    this.nombrePlace += 1
  }

  onSubmit() {
    if (this.dateDepart.value != undefined && this.dateArrive.value != undefined) {
      const date: any = this.dateDepart.value.split("T");
      const heure: any = this.dateArrive.value.split("T");
      console.log("dateDepart : ", date)
      console.log("dateArrive : ", heure)
      this.openToast(true);
    } else {
      this.openDialogDate()
    }
  }

  openToast(value: boolean) {
    this.isToastOpen = value
  }


  async openDialogDate() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Erreur',
        message: "Veillez présiser toutes les dates s'il vous plaît",
        buttons: ['OK']
      });
    await alert.present();
  }

  // ceeve(e:any){
  //   console.log("toggle change : ", e.detail.checked)
  // }

  ngOnInit() {
  }

}

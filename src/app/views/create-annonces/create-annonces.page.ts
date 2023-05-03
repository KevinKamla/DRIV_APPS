import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-annonces',
  templateUrl: './create-annonces.page.html',
  styleUrls: ['./create-annonces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FormsModule, ReactiveFormsModule, RouterLink],
  providers: [FormControl]
})
export class CreateAnnoncesPage implements OnInit {

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
    minuteArrive: new FormControl()
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




  ngOnInit() {
  }

}

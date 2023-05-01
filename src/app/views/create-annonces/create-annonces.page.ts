import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-annonces',
  templateUrl: './create-annonces.page.html',
  styleUrls: ['./create-annonces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FormsModule, ReactiveFormsModule],
  providers: [FormControl]
})
export class CreateAnnoncesPage implements OnInit {

  constructor() { }

  nombrePlace: number = 0;
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

  ngOnInit() {
  }

}

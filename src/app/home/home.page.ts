import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AnnoncesPage } from '../views/annonces/annonces.page';
import { TrajetsPage } from '../views/trajets/trajets.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AnnoncesPage, TrajetsPage, RouterLink, RouterLinkActive],
})
export class HomePage implements OnInit {
  constructor() { }
  segmentSelected: string = "annonces"

  segmentChanged(e: any) {
    // console.log(e.detail.value);
    this.segmentSelected = e.detail.value;

  }


  ngOnInit() {
    // console.log( "segmentSelected : ",  this.segmentSelected)
  }
}

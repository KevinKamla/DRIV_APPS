import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { AnnoncesPage } from '../views/annonces/annonces.page';
import { TrajetsPage } from '../views/trajets/trajets.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AnnoncesPage, TrajetsPage, RouterLink, RouterLinkActive],
})
export class HomePage implements OnInit {
  
  constructor(
    private storage: Storage,
    private menuController: MenuController,
    ) {
      this.init();
      this.menuController.enable(true);
    }
  
  segmentSelected: string = "annonces"
  items: any; 
  user: any = null;

  segmentChanged(e: any) {
    this.segmentSelected = e.detail.value;
  }

  async init() {
    await this.storage.create();
  }

  async ngOnInit() {
    await this.storage.get('user').then((response)=>{
      this.user = response;
    });
    
  }

  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  
   constructor() {}

   public appPages = [
    { title: 'Accueil', url: '/annonces', icon: 'home' },
    { title: 'Profil', url: '/folder/Profil', icon: 'person-circle' },
    { title: 'Reservations', url: '/folder/reservations', icon: 'bookmark' }, 
    { title: 'Activités', url: '/folder/activites', icon: 'reader' } 
  ];

  public labels = [
    { title: 'Invite des amis', url: '/folder/invite', icon: 'people' },
    { title: 'A Propos', url: '/folder/apropos', icon: 'alert-circle' },
    { title: 'Parametre', url: '/folder/parametre', icon: 'settings' },
  ];
}

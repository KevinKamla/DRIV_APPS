import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  
   constructor() {}

   public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person-circle' },
    { title: 'Reservations', url: '/reservations', icon: 'bookmark' }, 
    { title: 'Activités', url: '/activites', icon: 'reader' } 
  ];

  public labels = [
    { title: 'Invite des amis', url: '/invite', icon: 'people' },
    { title: 'A Propos', url: '/a-propos', icon: 'alert-circle' },
    { title: 'Parametre', url: '/parametre', icon: 'settings' },
  ];
}

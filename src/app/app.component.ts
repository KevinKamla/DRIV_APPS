import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(
    private storage: Storage,
    ) {
      this.init(); 
    }

  //user : any = null;
  profilePicture : string = "";
  lastName: string = "";
  firstName : string = "";
  type : string = "";

  async init() {
    await this.storage.create();
  }

  async ngOnInit() {
    await this.storage.get('user').then((response)=>{
      if(response != null){
        this.type = response.type;
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.profilePicture = response.profilePicture;
      }
    });
  }

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

 logout(){
  this.storage.set('user', null).then((response)=>{
    console.log("memoire vider ****");
  });
 }

}

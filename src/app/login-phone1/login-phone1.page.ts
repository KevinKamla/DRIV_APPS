import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-phone1',
  templateUrl: './login-phone1.page.html',
  styleUrls: ['./login-phone1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class LoginPhone1Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
  
  ngOnInit() {
  }

}

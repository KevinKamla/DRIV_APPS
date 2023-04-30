import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.page.html',
  styleUrls: ['./trajets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class TrajetsPage implements OnInit {

  constructor() { }

  user_note: number = 3

  ngOnInit() {
  }

}

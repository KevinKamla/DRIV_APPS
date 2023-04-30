import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-trajets',
  templateUrl: './create-trajets.page.html',
  styleUrls: ['./create-trajets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateTrajetsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

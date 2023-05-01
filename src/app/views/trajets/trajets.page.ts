import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.page.html',
  styleUrls: ['./trajets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class TrajetsPage implements OnInit {

  constructor() { }

  user_note: number = 3

  
  searchForm = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    date: new FormControl(),
  });

  closeModal() {
  }

  Searche() {

  }

  ngOnInit() {
  }

}

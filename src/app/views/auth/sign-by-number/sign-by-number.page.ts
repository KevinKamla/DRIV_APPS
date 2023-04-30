import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-by-number',
  templateUrl: './sign-by-number.page.html',
  styleUrls: ['./sign-by-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SignByNumberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-code-number',
  templateUrl: './get-code-number.page.html',
  styleUrls: ['./get-code-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class GetCodeNumberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

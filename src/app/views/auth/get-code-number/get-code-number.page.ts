import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-get-code-number',
  templateUrl: './get-code-number.page.html',
  styleUrls: ['./get-code-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GetCodeNumberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

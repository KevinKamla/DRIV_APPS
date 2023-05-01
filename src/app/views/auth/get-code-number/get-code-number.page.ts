import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-code-number',
  templateUrl: './get-code-number.page.html',
  styleUrls: ['./get-code-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class GetCodeNumberPage implements OnInit {

  constructor() { }


  myGroup = new FormGroup({
    code1: new FormControl(),
    code2: new FormControl(),
    code3: new FormControl(),
    code4: new FormControl(),
    code5: new FormControl(),
    code6: new FormControl(),
  });

  onSubmit() {

  }
  ngOnInit() {
  }

}

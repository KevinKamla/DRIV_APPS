import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-annonces',
  templateUrl: './create-annonces.page.html',
  styleUrls: ['./create-annonces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FormsModule, ReactiveFormsModule],
  providers: [FormControl]
})
export class CreateAnnoncesPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  myGroup = new FormGroup({
    depart : new FormControl(),
    arrive : new FormControl()
  });

  ngOnInit() {
  }

}

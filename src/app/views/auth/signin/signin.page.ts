import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators ,FormBuilder} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SigninPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(){
    
  }

  ngOnInit() {
  }

}

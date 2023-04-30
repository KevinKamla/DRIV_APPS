import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators ,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, ReactiveFormsModule]
})
export class SigninPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(){
    console.log("EMAIL : ",this.loginForm.get("email")?.value);
    console.log("PASSWORD : ",this.loginForm.get("password")?.value);
  }

  ngOnInit() {
  }

}

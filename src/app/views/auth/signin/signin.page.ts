import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators ,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Toast } from '@capacitor/toast';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { HttpResponse } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, ReactiveFormsModule]
})
export class SigninPage implements OnInit {

  //#region Constructeur
  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private navCtrl: NavController,
    private storage: Storage,
    private menuController: MenuController,
  ) {  
    this.init(); 
  }
  //#endregion

  //#region Declaration des variables
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  user: any = null;
  isToastOpen1: boolean = false;
  isToastOpen2: boolean = false;
  //#endregion

  //#region Initialisation
  async init() {
    await this.storage.create();
  }

  async ngOnInit() {
    this.menuController.enable(false);
  }
  //#endregion

  //#region Mes fonctions
  openToast_success(value: boolean){
    this.isToastOpen1 = value;
  }
  openToast_error(value: boolean){
    this.isToastOpen2 = value;
  }
  
  async openToast(value: string) {
    await Toast.show({
      text: value,
      duration: 'long',
      position: 'top'
    });
  }

  onSubmit(){
    this.authentificationService.get("authentification/"+this.loginForm.get("email")?.value+"/"+this.loginForm.get("password")?.value).subscribe(
      (response: HttpResponse<any>) => {
      this.openToast_success(true);
      this.openToast("Login successful");
      this.storage.set('user', response.body).then((data)=>{
        this.user = data;
        this.navCtrl.navigateForward('/home/'+this.user.id+'/'+this.user.type); 
      });
    }, 
    (error) => { 
      this.openToast("Login failed");
      this.openToast_error(true); 
    });
  }
  //#endregion
  
}

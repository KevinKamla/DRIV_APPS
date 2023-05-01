import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AnimationController  } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class AnnoncesPage implements OnInit {

  type: string = "Annonces";

  constructor(
    private animationCtrl : AnimationController 
  ) { }


  searchForm = new FormGroup({
    depart: new FormControl(),
    arrive: new FormControl(),
    date: new FormControl(),
  });

  propoForm = new FormGroup({
    prix: new FormControl(),
    commentaire: new FormControl(),
  });

  closeModal() {
  }

  Searche() {

  }

  propositionForm() {

  }


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };


  ngOnInit() {
  }

}

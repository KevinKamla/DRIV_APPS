import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAnnoncesPage } from './create-annonces.page';

describe('CreateAnnoncesPage', () => {
  let component: CreateAnnoncesPage;
  let fixture: ComponentFixture<CreateAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

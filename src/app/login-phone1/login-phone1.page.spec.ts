import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPhone1Page } from './login-phone1.page';

describe('LoginPhone1Page', () => {
  let component: LoginPhone1Page;
  let fixture: ComponentFixture<LoginPhone1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPhone1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

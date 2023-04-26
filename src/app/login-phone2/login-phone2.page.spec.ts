import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPhone2Page } from './login-phone2.page';

describe('LoginPhone2Page', () => {
  let component: LoginPhone2Page;
  let fixture: ComponentFixture<LoginPhone2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPhone2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

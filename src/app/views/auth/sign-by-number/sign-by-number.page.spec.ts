import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignByNumberPage } from './sign-by-number.page';

describe('SignByNumberPage', () => {
  let component: SignByNumberPage;
  let fixture: ComponentFixture<SignByNumberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignByNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

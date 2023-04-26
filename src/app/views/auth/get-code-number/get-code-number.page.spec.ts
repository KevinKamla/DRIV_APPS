import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCodeNumberPage } from './get-code-number.page';

describe('GetCodeNumberPage', () => {
  let component: GetCodeNumberPage;
  let fixture: ComponentFixture<GetCodeNumberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetCodeNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

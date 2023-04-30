import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetsPage } from './trajets.page';

describe('TrajetsPage', () => {
  let component: TrajetsPage;
  let fixture: ComponentFixture<TrajetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

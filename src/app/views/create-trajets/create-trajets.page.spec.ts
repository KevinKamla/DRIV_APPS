import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTrajetsPage } from './create-trajets.page';

describe('CreateTrajetsPage', () => {
  let component: CreateTrajetsPage;
  let fixture: ComponentFixture<CreateTrajetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateTrajetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

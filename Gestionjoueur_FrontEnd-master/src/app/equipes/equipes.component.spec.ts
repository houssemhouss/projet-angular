import { ComponentFixture, TestBed } from '@angular/core/testing';

import { equipesComponent } from './equipes.omponent';

describe('equipesComponent', () => {
  let component: equipesComponent;
  let fixture: ComponentFixture<equipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ equipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(equipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

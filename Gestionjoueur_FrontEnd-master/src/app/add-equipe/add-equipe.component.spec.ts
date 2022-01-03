import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddequipeComponent } from './add-equipe.component';

describe('AddMequipeComponent', () => {
  let component: AddequipeComponent;
  let fixture: ComponentFixture<AddequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

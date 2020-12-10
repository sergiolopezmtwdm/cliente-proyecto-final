import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgamesComponent } from './allgames.component';

describe('AllgamesComponent', () => {
  let component: AllgamesComponent;
  let fixture: ComponentFixture<AllgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

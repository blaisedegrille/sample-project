import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetarolasComponent } from './betarolas.component';

describe('BetarolasComponent', () => {
  let component: BetarolasComponent;
  let fixture: ComponentFixture<BetarolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetarolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetarolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

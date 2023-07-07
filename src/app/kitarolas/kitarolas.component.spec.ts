import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitarolasComponent } from './kitarolas.component';

describe('KitarolasComponent', () => {
  let component: KitarolasComponent;
  let fixture: ComponentFixture<KitarolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitarolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitarolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

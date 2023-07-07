import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomissioComponent } from './komissio.component';

describe('KomissioComponent', () => {
  let component: KomissioComponent;
  let fixture: ComponentFixture<KomissioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomissioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomissioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

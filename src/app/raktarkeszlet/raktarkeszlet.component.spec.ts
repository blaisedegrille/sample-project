import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaktarkeszletComponent } from './raktarkeszlet.component';

describe('RaktarkeszletComponent', () => {
  let component: RaktarkeszletComponent;
  let fixture: ComponentFixture<RaktarkeszletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaktarkeszletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaktarkeszletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocaComponent } from './gioca.component';

describe('GiocaComponent', () => {
  let component: GiocaComponent;
  let fixture: ComponentFixture<GiocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiocaComponent]
    });
    fixture = TestBed.createComponent(GiocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

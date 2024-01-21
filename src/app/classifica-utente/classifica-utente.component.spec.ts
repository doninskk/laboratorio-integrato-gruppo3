import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificaUtenteComponent } from './classifica-utente.component';

describe('ClassificaUtenteComponent', () => {
  let component: ClassificaUtenteComponent;
  let fixture: ComponentFixture<ClassificaUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificaUtenteComponent]
    });
    fixture = TestBed.createComponent(ClassificaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

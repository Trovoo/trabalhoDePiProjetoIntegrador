import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicioFinal } from './exercicio-final';

describe('ExercicioFinal', () => {
  let component: ExercicioFinal;
  let fixture: ComponentFixture<ExercicioFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioFinal],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioFinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

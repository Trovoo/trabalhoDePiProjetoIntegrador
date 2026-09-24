import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio6 } from './exercicio6';

describe('Exercicio6', () => {
  let component: Exercicio6;
  let fixture: ComponentFixture<Exercicio6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio3 } from './exercicio3';

describe('Exercicio3', () => {
  let component: Exercicio3;
  let fixture: ComponentFixture<Exercicio3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

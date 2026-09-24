import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio5 } from './exercicio5';

describe('Exercicio5', () => {
  let component: Exercicio5;
  let fixture: ComponentFixture<Exercicio5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

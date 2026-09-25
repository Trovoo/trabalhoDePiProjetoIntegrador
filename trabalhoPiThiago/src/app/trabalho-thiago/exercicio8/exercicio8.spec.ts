import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio8 } from './exercicio8';

describe('Exercicio8', () => {
  let component: Exercicio8;
  let fixture: ComponentFixture<Exercicio8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio8],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

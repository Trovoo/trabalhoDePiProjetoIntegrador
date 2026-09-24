import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio7 } from './exercicio7';

describe('Exercicio7', () => {
  let component: Exercicio7;
  let fixture: ComponentFixture<Exercicio7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio12 } from './exercicio12';

describe('Exercicio12', () => {
  let component: Exercicio12;
  let fixture: ComponentFixture<Exercicio12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio12],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

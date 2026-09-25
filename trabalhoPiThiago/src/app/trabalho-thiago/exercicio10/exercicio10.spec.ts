import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio10 } from './exercicio10';

describe('Exercicio10', () => {
  let component: Exercicio10;
  let fixture: ComponentFixture<Exercicio10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio10],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

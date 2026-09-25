import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio9 } from './exercicio9';

describe('Exercicio9', () => {
  let component: Exercicio9;
  let fixture: ComponentFixture<Exercicio9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio9],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

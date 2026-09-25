import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio11 } from './exercicio11';

describe('Exercicio11', () => {
  let component: Exercicio11;
  let fixture: ComponentFixture<Exercicio11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

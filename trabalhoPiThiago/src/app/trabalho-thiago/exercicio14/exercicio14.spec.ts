import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio14 } from './exercicio14';

describe('Exercicio14', () => {
  let component: Exercicio14;
  let fixture: ComponentFixture<Exercicio14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio14],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

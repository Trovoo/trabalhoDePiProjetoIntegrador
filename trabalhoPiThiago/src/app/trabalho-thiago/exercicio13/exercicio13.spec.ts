import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio13 } from './exercicio13';

describe('Exercicio13', () => {
  let component: Exercicio13;
  let fixture: ComponentFixture<Exercicio13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio13],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

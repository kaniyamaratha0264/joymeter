import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoymeterCardsComponent } from './joymeter-cards.component';

describe('JoymeterCardsComponent', () => {
  let component: JoymeterCardsComponent;
  let fixture: ComponentFixture<JoymeterCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoymeterCardsComponent]
    });
    fixture = TestBed.createComponent(JoymeterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

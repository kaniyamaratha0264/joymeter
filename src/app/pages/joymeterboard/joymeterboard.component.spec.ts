import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoymeterboardComponent } from './joymeterboard.component';

describe('JoymeterboardComponent', () => {
  let component: JoymeterboardComponent;
  let fixture: ComponentFixture<JoymeterboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoymeterboardComponent]
    });
    fixture = TestBed.createComponent(JoymeterboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

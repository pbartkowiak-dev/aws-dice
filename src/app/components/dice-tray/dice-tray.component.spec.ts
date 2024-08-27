import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceTrayComponent } from './dice-tray.component';

describe('DiceTrayComponent', () => {
  let component: DiceTrayComponent;
  let fixture: ComponentFixture<DiceTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceTrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

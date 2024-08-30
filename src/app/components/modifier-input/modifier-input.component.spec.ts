import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInputComponent } from './modifier-input.component';

describe('ModifierInputComponent', () => {
  let component: ModifierInputComponent;
  let fixture: ComponentFixture<ModifierInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

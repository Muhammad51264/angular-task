import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsContainerComponent } from './instructions-container.component';

describe('InstructionsContainerComponent', () => {
  let component: InstructionsContainerComponent;
  let fixture: ComponentFixture<InstructionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

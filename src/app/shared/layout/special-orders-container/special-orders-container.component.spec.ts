import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOrdersContainerComponent } from './special-orders-container.component';

describe('SpecialOrdersContainerComponent', () => {
  let component: SpecialOrdersContainerComponent;
  let fixture: ComponentFixture<SpecialOrdersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialOrdersContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

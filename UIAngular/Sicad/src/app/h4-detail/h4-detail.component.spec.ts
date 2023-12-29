import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H4DetailComponent } from './h4-detail.component';

describe('H4DetailComponent', () => {
  let component: H4DetailComponent;
  let fixture: ComponentFixture<H4DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H4DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H4DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

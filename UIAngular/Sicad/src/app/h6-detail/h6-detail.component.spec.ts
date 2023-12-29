import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H6DetailComponent } from './h6-detail.component';

describe('H6DetailComponent', () => {
  let component: H6DetailComponent;
  let fixture: ComponentFixture<H6DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H6DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H6DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

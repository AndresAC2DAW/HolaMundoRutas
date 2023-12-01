import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutinComponent } from './edutin.component';

describe('EdutinComponent', () => {
  let component: EdutinComponent;
  let fixture: ComponentFixture<EdutinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdutinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdutinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLabComponent } from './angular-lab.component';

describe('AngularLabComponent', () => {
  let component: AngularLabComponent;
  let fixture: ComponentFixture<AngularLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

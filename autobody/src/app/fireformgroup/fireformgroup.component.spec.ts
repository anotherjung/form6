import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireformgroupComponent } from './fireformgroup.component';

describe('FireformgroupComponent', () => {
  let component: FireformgroupComponent;
  let fixture: ComponentFixture<FireformgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireformgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireformgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

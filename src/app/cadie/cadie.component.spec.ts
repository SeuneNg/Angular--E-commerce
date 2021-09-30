import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadieComponent } from './cadie.component';

describe('CadieComponent', () => {
  let component: CadieComponent;
  let fixture: ComponentFixture<CadieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

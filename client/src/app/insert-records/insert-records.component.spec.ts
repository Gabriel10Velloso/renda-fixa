import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRecordsComponent } from './insert-records.component';

describe('InsertRecordsComponent', () => {
  let component: InsertRecordsComponent;
  let fixture: ComponentFixture<InsertRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

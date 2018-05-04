import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThreadsComponent } from './main-threads.component';

describe('MainThreadsComponent', () => {
  let component: MainThreadsComponent;
  let fixture: ComponentFixture<MainThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

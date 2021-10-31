import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalbmiComponent } from './calbmi.component';

describe('CalbmiComponent', () => {
  let component: CalbmiComponent;
  let fixture: ComponentFixture<CalbmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalbmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalbmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablaComponent } from './datatabla.component';

describe('DatatablaComponent', () => {
  let component: DatatablaComponent;
  let fixture: ComponentFixture<DatatablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

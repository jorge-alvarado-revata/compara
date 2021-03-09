import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleComponent } from './sele.component';

describe('SeleComponent', () => {
  let component: SeleComponent;
  let fixture: ComponentFixture<SeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

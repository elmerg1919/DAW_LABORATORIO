import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanSalvadorComponent } from './san-salvador.component';

describe('SanSalvadorComponent', () => {
  let component: SanSalvadorComponent;
  let fixture: ComponentFixture<SanSalvadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanSalvadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoukhazanaComponent } from './moukhazana.component';

describe('MoukhazanaComponent', () => {
  let component: MoukhazanaComponent;
  let fixture: ComponentFixture<MoukhazanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoukhazanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoukhazanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

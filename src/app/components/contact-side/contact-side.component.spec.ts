import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSideComponent } from './contact-side.component';

describe('ContactSideComponent', () => {
  let component: ContactSideComponent;
  let fixture: ComponentFixture<ContactSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

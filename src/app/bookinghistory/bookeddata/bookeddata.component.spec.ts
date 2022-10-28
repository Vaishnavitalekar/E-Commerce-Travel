import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeddataComponent } from './bookeddata.component';

describe('BookeddataComponent', () => {
  let component: BookeddataComponent;
  let fixture: ComponentFixture<BookeddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookeddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

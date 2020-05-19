import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchcardComponent } from './scratchcard.component';

describe('ScratchcardComponent', () => {
  let component: ScratchcardComponent;
  let fixture: ComponentFixture<ScratchcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

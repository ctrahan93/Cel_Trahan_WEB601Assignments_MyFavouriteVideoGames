import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponentPipe } from './pipe.component.pipe';

describe('PipeComponent', () => {
  let component: PipeComponentPipe;
  let fixture: ComponentFixture<PipeComponentPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeComponentPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComponentPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

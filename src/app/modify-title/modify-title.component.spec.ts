import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTitleComponent } from './modify-title.component';

describe('ModifyTitleComponent', () => {
  let component: ModifyTitleComponent;
  let fixture: ComponentFixture<ModifyTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyTitleComponent]
    });
    fixture = TestBed.createComponent(ModifyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

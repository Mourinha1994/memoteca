import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPensamentosComponent } from './form-pensamentos.component';

describe('FormPensamentosComponent', () => {
  let component: FormPensamentosComponent;
  let fixture: ComponentFixture<FormPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPensamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

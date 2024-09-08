import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensamentoComponent } from './edit-pensamento.component';

describe('EditPensamentoComponent', () => {
  let component: EditPensamentoComponent;
  let fixture: ComponentFixture<EditPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

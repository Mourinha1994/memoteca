import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePensamentoComponent } from './delete-pensamento.component';

describe('DeletePensamentoComponent', () => {
  let component: DeletePensamentoComponent;
  let fixture: ComponentFixture<DeletePensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePensamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

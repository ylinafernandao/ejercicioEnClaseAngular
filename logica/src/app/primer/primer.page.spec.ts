import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimerPage } from './primer.page';

describe('PrimerPage', () => {
  let component: PrimerPage;
  let fixture: ComponentFixture<PrimerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

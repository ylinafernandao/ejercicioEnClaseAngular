import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartoPage } from './cuarto.page';

describe('CuartoPage', () => {
  let component: CuartoPage;
  let fixture: ComponentFixture<CuartoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuartoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

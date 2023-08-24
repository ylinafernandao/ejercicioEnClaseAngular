import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundoPage } from './segundo.page';

describe('SegundoPage', () => {
  let component: SegundoPage;
  let fixture: ComponentFixture<SegundoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SegundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

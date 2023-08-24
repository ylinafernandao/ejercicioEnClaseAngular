import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TercerPage } from './tercer.page';

describe('TercerPage', () => {
  let component: TercerPage;
  let fixture: ComponentFixture<TercerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TercerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task2Component } from './task2.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { By } from '@angular/platform-browser';

describe('Task2Component', () => {
  let component: Task2Component;
  let fixture: ComponentFixture<Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task2Component, DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the correct header to the dialog', () => {
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    expect(dialogElement.header).toBe(component.DIALOG_CONFIG.header);
  });

  it('should pass the correct description to the dialog', () => {
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    expect(dialogElement.description).toBe(component.DIALOG_CONFIG.description);
  });

  it('should pass the correct primary button text to the dialog', () => {
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    expect(dialogElement.primaryButtonText).toBe(
      component.DIALOG_CONFIG.primaryButtonText,
    );
  });

  it('should pass the correct cards to the dialog', () => {
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    expect(dialogElement.cards).toEqual(component.DIALOG_CONFIG.cards);
  });

  it('should handle primary button click', () => {
    spyOn(component, 'onPrimaryClick');
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    dialogElement.primaryClick.emit();
    expect(component.onPrimaryClick).toHaveBeenCalled();
  });

  it('should handle secondary button click', () => {
    spyOn(component, 'onSecondaryClick');
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    dialogElement.secondaryClick.emit();
    expect(component.onSecondaryClick).toHaveBeenCalled();
  });

  it('should handle close button click', () => {
    spyOn(component, 'onCloseClick');
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    dialogElement.closeClick.emit();
    expect(component.onCloseClick).toHaveBeenCalled();
  });

  it('should handle card click', () => {
    spyOn(component, 'onCardClick');
    const dialogElement = fixture.debugElement.query(
      By.css('app-dialog'),
    ).componentInstance;
    const card = { src: 'test-src', text: 'Test Card' };
    dialogElement.cardClick.emit(card);
    expect(component.onCardClick).toHaveBeenCalledWith(card);
  });
});

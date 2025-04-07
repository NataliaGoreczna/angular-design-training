import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header and description', () => {
    component.header = 'Test Header';
    component.description = 'Test Description';
    fixture.detectChanges();

    const headerElement = debugElement.query(
      By.css('.text-container p'),
    ).nativeElement;
    const descriptionElement = debugElement.query(
      By.css('.description'),
    ).nativeElement;

    expect(headerElement.textContent).toContain('Test Header');
    expect(descriptionElement.textContent).toContain('Test Description');
  });

  it('should emit closeClick event when close button is clicked', () => {
    spyOn(component.closeClick, 'emit');

    const closeButton = debugElement.query(
      By.css('.close-button'),
    ).nativeElement;
    closeButton.click();

    expect(component.closeClick.emit).toHaveBeenCalled();
  });

  it('should emit primaryClick event when primary button is clicked', () => {
    spyOn(component.primaryClick, 'emit');

    const primaryButton = debugElement.query(
      By.css('.explore-button'),
    ).nativeElement;
    primaryButton.click();

    expect(component.primaryClick.emit).toHaveBeenCalled();
  });

  it('should emit cardClick event when a card is clicked', () => {
    spyOn(component.cardClick, 'emit');
    component.cards = [{ src: 'test-src', text: 'Test Card' }];
    fixture.detectChanges();

    const cardButton = debugElement.query(By.css('.card')).nativeElement;
    cardButton.click();

    expect(component.cardClick.emit).toHaveBeenCalledWith({
      src: 'test-src',
      text: 'Test Card',
    });
  });

  it('should display secondary button if secondaryButtonText is provided', () => {
    component.secondaryButtonText = 'Cancel';
    fixture.detectChanges();

    const secondaryButton = debugElement.query(
      By.css('.explore-button-secondary'),
    ).nativeElement;
    fixture.detectChanges();
    expect(secondaryButton.textContent).toContain('Cancel');
  });

  it('should emit secondaryClick event when secondary button is clicked', () => {
    spyOn(component.secondaryClick, 'emit');
    component.secondaryButtonText = 'Cancel';
    fixture.detectChanges();

    const secondaryButton = debugElement.query(
      By.css('.explore-button-secondary'),
    ).nativeElement;
    secondaryButton.click();

    expect(component.secondaryClick.emit).toHaveBeenCalled();
  });
});

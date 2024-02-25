import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input
      type="text"
      name="food"
      id="food"
      [ngStyle]="{ border, borderRadius, background: backgroundColor, height }"
      [placeholder]="placeHolder"
      [style.fontSize.px]="fontSize" 
      [style.color]="placeHolderColor"
    />
  `,
  styles: `
  input{
    width: 100%;
  }`,
})
export class InputComponent {
  @Input() border: string = '0';
  @Input() fontSize!: string;
  @Input() placeHolder: string = 'default placHolder...';
  @Input() placeHolderColor: string = 'var(--gray-placeholder-color)';
  @Input() height: string = '49px';
  @Input() iconUrl: string = '';
  @Input() borderRadius: string = '0.5rem';
  @Input() backgroundColor: string = 'var(--background-gray-color)';
  @Input() iconWidth: string = '1rem';
  @Input() iconHeight: string = '1.125rem';
  @Input() padding: string = '0.875rem 0.875rem';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div>
      <img
        src="{{ iconUrl }}"
        alt="input"
        [style.width]="iconWidth"
        [style.height]="iconHeight"
      />

      <input
        type="text"
        name="food"
        id="food"
        [ngStyle]="{ border, borderRadius, background: backgroundColor, height,padding }"
        [placeholder]="placeHolder"
        [style.fontSize.rem]="fontSize"
        [style.color]="placeHolderColor"
      />
    </div>
  `,
  styles: `
  div{
    position:relative;
  }

  img{
    position: absolute;
    top: 15%;
    left: 1%;
  }

  input{
    width: 100%;
    box-sizing: border-box;

  }`,
})
export class InputComponent {
  @Input() border: string = '0';
  @Input() fontSize!: string;
  @Input() placeHolder: string = 'default placHolder...';
  @Input() placeHolderColor: string = 'var(--gray-placeholder-color)';
  @Input() height: string = '3.0625rem';
  @Input() iconUrl: string = '';
  @Input() borderRadius: string = '0.5rem';
  @Input() backgroundColor: string = 'var(--background-gray-color)';
  @Input() iconWidth: string = '1rem';
  @Input() iconHeight: string = '1.125rem';
  @Input() padding: string = '0.4375rem 0rem 0.5rem 2rem';
}

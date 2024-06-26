import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [ngStyle]="{ borderRadius,background:backgroundColor,padding }"
      class="{{ buttonClassName }}"
    >
      <img
        src="{{ iconUrl }}"
        [ngStyle]="{ width: iconWidth, height: iconHeight }"
        *ngIf="iconUrl"
      />
      <img />
      <p
        [ngStyle]="{ color: buttonNameColor, fontSize, fontWeight: 'bold' }"
        *ngIf="buttonName"
      >
        {{ buttonName }}
      </p>
    </button>
  `,
  styles: `
  button{
    align-items:center;
    border: 0;
    cursor: pointer;
    display:flex;
    justify-content: center;
    gap:0.3125rem;    
  }

  .btn-menu {
    display: none;
  }

  .custom-btn{
    width:100%;
    box-shadow: 
  0px 20px 40px 0px rgba(250, 99, 35, 0.24),
  0px 5px 10px 0px rgba(253, 114, 92, 0.22) !important;
  }

  @media screen and (max-width: 64rem) {
  .btn-menu {
    display: block;
  }
}

  `,
})
export class ButtonComponent {
  @Input() buttonClassName: string = 'btn';
  @Input() fontSize!: string;
  @Input() buttonName: string = 'default button';
  @Input() iconUrl: string = '';
  @Input() borderRadius: string = '0.5rem';
  @Input() backgroundColor: string = 'var(--white-color)';
  @Input() iconWidth: string = '1rem';
  @Input() iconHeight: string = '1.125rem';
  @Input() padding: string = '0.875rem 0.875rem';
  @Input() buttonNameColor: string = 'var(--black-color)';
}

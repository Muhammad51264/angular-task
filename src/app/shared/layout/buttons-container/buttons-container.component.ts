import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  template: `
    <div class="btn-wrapper">
      <app-button
        [buttonName]="'Search Food'"
        [iconUrl]="'assets/Search.svg'"
      ></app-button>
      <app-button
        [buttonName]="'Login'"
        [buttonNameColor]="'var(--yellow-font-color)'"
        [iconUrl]="'assets/user.svg'"
        [buttonClassName]="'shadow-effect'"
      ></app-button>
    </div>
  `,
  styles: `
  .btn-wrapper {
  display: flex;
  gap: 1.875rem;
  justify-content: space-between;
  ma
}

@media screen and (max-width: 64rem) {
  .btn-wrapper {
    display: none;
  }
}
  `,
})
export class ButtonsContainerComponent {}

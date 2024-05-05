import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div>
      <ul>
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styles: `
div{
    background-color: var(--white-color);
    box-shadow: var(--gray-color) 0rem 0.65rem 0.1rem -0.625rem, var(--gray-color) 0rem 0.1875rem 0.4375rem -0.1875rem;
    display: flex;
    flex-direction:color;
    justify-content: end;
    padding: 0.9375rem;
    position:fixed;
    right: 0;
    top: 5rem;
  }

  ul{
    list-style-type: none;
  }
  `,
})
export class SidebarComponent {}

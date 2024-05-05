import { Component } from '@angular/core';

@Component({
  selector: 'app-header-content',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h6>{{ subTitle }}</h6>
      <app-order-modal></app-order-modal>
    </div>
  `,
  styles: `
  div{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding: 0 1rem;
    margin-bottom:2rem;
    margin: 0 auto;
  }

  h1{
    color:var(--white-color);
    font-size:5.5rem;
    font-weight:bold;
    
    
  }
  h6{
    color: var(--gray-color);
    font-size:1.375rem;
  }

  @media screen and (max-width: 64rem) {
  h1 {
    text-align:center;
    font-size: 10vw;
  }

  h6{
    text-align:center;
    font-size: 5vw;
    padding : 0 0.3125rem;
  }
}
  `,
})
export class HeaderContentComponent {
  title = 'Are you starving?';
  subTitle = 'Within a few clicks, find meals that are accessible near you';
}

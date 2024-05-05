import { Component, Input } from '@angular/core';
import { PopularItem } from '../../../core/models/popular.item.model';

@Component({
  selector: 'app-popular-item-card',
  template: `
    <div class="card">
      <img src="{{ item.imgLink }}" alt="{{ item.title }}" class="card-img" />
      <h6 class="title">{{ item.title }}</h6>
      <div class="location-container">
        <img src="assets/instruction1.png" alt="location" class="icon" />
        <h6 class="location">{{ item.location }}</h6>
      </div>
      <h6 class="price">$ {{ item.price }}</h6>
      <app-button
        [buttonName]="'Order Now'"
        [buttonNameColor]="'var(--white-color)'"
        [iconWidth]="'1.125rem'"
        [backgroundColor]="'var(--bright-orange-color)'"
        [fontSize]="'1.125rem'"
        [padding]="'1.3125rem 3rem'"
        [buttonClassName]="'custom-btn'"
      ></app-button>
    </div>
  `,
  styles: `
  .card{
    display:flex;
    flex-direction:column;
    gap:1rem;
  }

  .title{
    color: var(--light-black-color);
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.65rem;
  }

  .location-container{
    align-items:center;
    display:flex;
  }

  .card-img{
    height: 17.6875rem;
    width: 17.6744rem;
  }

  .icon{
    height: 28px;
    line-height: 1.35rem;
    width: 24px;
  }

  .location{
    color:var(--yellow-offer-color);
    font-size:1.375rem;
    font-weight:400;
    line-height: 1.35rem;
    padding-bottom:6px;
  }

  .price{
    font-size:1.375rem;
    font-weight:700;
    line-height: 1.35rem;
  }


  `,
})
export class PopularItemCardComponent {
  @Input() item!: PopularItem;
}

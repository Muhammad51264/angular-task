import { Component } from '@angular/core';
import { PopularItem } from '../../../core/models/popular.item.model';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css',
})
export class PopularItemsComponent {
  title = 'Popular items';
  popularItems: PopularItem[] = [
    {
      imgLink: 'assets/cheese-burger.png',
      title: 'Cheese Burger',
      location: 'Burger Arena',
      price: '3.88',
    },
    {
      imgLink: "assets/toffe's-cake.png",
      title: "Toffe's Cake",
      location: 'Top Sticks',
      price: '4.00',
    },
    {
      imgLink: 'assets/dan-cake.png',
      title: 'Dancake',
      location: 'Cake World',
      price: '1.99',
    },
    {
      imgLink: 'assets/crispy-sandwitch.png',
      title: 'Crispy Sandwitch',
      location: 'Fastfood Dine',
      price: '3.00',
    },
    {
      imgLink: 'assets/thai-soup.png',
      title: 'Thai Soup',
      location: 'Foody man',
      price: '2.79',
    },

  ];

  iconClasses: String[] = ['right-arrow', 'left-arrow'];

}

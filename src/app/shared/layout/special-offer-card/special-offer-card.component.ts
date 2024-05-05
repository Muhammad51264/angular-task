import { Component, Input } from '@angular/core';
import { SpecialOffer } from '../../../core/models/special.offer.model';

@Component({
  selector: 'app-special-offer-card',
  templateUrl: './special-offer-card.component.html',
  styleUrl: './special-offer-card.component.css'
})
export class SpecialOfferCardComponent {

  @Input() offer!:SpecialOffer;
}

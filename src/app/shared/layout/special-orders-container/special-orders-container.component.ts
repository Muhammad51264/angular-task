import { Component } from '@angular/core';
import { SpecialOffer } from '../../../core/models/special.offer.model';

@Component({
  selector: 'app-special-orders-container',
  templateUrl: './special-orders-container.component.html',
  styleUrl: './special-orders-container.component.css'
})
export class SpecialOrdersContainerComponent {
 offers:SpecialOffer[]=[
  new SpecialOffer("assets/special-offer1.png","Greys Vage","15",6),
  new SpecialOffer("assets/special-offer2.png","Greys Vage","10",6),
  new SpecialOffer("assets/special-offer3.png","Greys Vage","25",7),
  new SpecialOffer("assets/special-offer4.png","Greys Vage","20",8),
 ]
}

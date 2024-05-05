import { Component } from '@angular/core';
import { Instruction } from '../../../core/models/instruction.model';

@Component({
  selector: 'app-instructions-container',
  templateUrl: './instructions-container.component.html',
  styleUrl: './instructions-container.component.css',
})
export class InstructionsContainerComponent {
  title = 'How does it work';
  instructions: Instruction[] = [
    new Instruction(
      'assets/instruction1.png',
      'Select location',
      'Choose the location where your food will be delivered.',
      '8.975rem'
    ),
    new Instruction(
      'assets/instruction2.png',
      'Choose order',
      'Check over hundreds of menus to pick your favorite food.',
      '8.9375rem'
    ),
    new Instruction(
      'assets/instruction3.png',
      'Pay advanced',
      'It\'s quick, safe, and simple. Select several methods of payment',
      '8.9319rem'
    ),
    new Instruction(
      'assets/instruction4.png',
      'Enjoy meals',
      'Food is made and delivered directly to your home.',
      '10rem'
    ),
  ];
}

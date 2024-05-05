import { Component, Input } from '@angular/core';
import { Instruction } from '../../../core/models/instruction.model';
@Component({
  selector: 'app-instruction-card',
  templateUrl: './instruction-card.component.html',
  styleUrl: './instruction-card.component.css',
})
export class InstructionCardComponent {
  @Input() instruction!: Instruction;
}

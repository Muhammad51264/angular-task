import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule],
  exports: [NavComponent]
})
export class SharedModule {}

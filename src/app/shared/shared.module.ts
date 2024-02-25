import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout';
import { ButtonComponent } from './layout/button/button.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ButtonsContainerComponent } from './layout/buttons-container/buttons-container.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderContentComponent } from './layout/header-content/header-content.component';
import { OrderModalComponent } from './layout/order-modal/order-modal.component';
import { InputComponent } from './layout/input/input.component';

@NgModule({
  declarations: [NavComponent, ButtonComponent, SidebarComponent, ButtonsContainerComponent, HeaderComponent, HeaderContentComponent, OrderModalComponent, InputComponent],
  imports: [CommonModule],
  exports: [NavComponent,HeaderComponent]
})
export class SharedModule {}

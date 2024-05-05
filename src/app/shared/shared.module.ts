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
import { SpecialOrdersContainerComponent } from './layout/special-orders-container/special-orders-container.component';
import { SpecialOfferCardComponent } from './layout/special-offer-card/special-offer-card.component';
import { InstructionsContainerComponent } from './layout/instructions-container/instructions-container.component';
import { InstructionCardComponent } from './layout/instruction-card/instruction-card.component';
import { PopularItemsComponent } from './layout/popular-items/popular-items.component';
import { PopularItemCardComponent } from './layout/popular-item-card/popular-item-card.component';

@NgModule({
  declarations: [
    NavComponent,
    ButtonComponent,
    SidebarComponent,
    ButtonsContainerComponent,
    HeaderComponent,
    HeaderContentComponent,
    OrderModalComponent,
    InputComponent,
    SpecialOrdersContainerComponent,
    SpecialOfferCardComponent,
    InstructionsContainerComponent,
    InstructionCardComponent,
    PopularItemsComponent,
    PopularItemCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavComponent,
    HeaderComponent,
    SpecialOrdersContainerComponent,
    InstructionsContainerComponent,
    PopularItemsComponent,
  ],
})
export class SharedModule {}

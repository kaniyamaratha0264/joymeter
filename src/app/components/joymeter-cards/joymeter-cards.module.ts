import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoymeterCardsComponent } from './joymeter-cards.component';



@NgModule({
  declarations: [JoymeterCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [JoymeterCardsComponent]
})
export class JoymeterCardsModule { }

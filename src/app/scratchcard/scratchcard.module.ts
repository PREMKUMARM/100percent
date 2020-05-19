import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScratchcardComponent } from './scratchcard.component';



@NgModule({
  declarations: [ScratchcardComponent],
  imports: [
    CommonModule
  ],
  exports: [ScratchcardComponent]
})
export class ScratchcardModule { }

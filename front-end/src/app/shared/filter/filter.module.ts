import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { SelectorComponent } from './selector/selector.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    DateComponent,
    SelectorComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilterModule { }

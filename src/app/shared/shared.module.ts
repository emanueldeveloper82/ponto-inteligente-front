import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';
import { TipoPipe } from './pipes/tipo.pipe';
import { DataPipe } from './pipes/data.pipe';



@NgModule({
  declarations: [MascaraDirective, TipoPipe, DataPipe],
  imports: [CommonModule],
  exports: [MascaraDirective, TipoPipe, DataPipe],
  providers: [PtBrMatPaginatorIntl]
})
export class SharedModule { }

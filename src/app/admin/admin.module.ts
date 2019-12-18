import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, ConfirmarDialog } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './components/admin.component';
import { MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule,
         MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatPaginatorIntl, MatRadioModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MAT_DATE_LOCALE, MatDialogModule, MatDialog } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LancamentoService } from '../shared/services/lancamento.service';
import { HttpUtilService } from '../shared/services/http-util.service';
import { PtBrMatPaginatorIntl } from '../shared/pt-br-mat-paginator-intl';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { AdminGuard } from './services/admin-guardd.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  declarations: [
  	ListagemComponent,
  	CadastroComponent,
    AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  providers: [
    LancamentoService,
    FuncionarioService,
    HttpUtilService,
    MatPaginatorIntl,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
    AdminGuard
  ],
  entryComponents: [ConfirmarDialog]
})
export class AdminModule { }

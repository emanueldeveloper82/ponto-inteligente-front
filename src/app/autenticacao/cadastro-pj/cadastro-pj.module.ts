import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { CadastroPjComponent } from './cadastro-pj.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarPjService } from '../cadastro-pj/services/cadastro-pj.service';

@NgModule({
  declarations: [CadastrarPjComponent, CadastroPjComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CadastrarPjService
  ]
})
export class CadastroPjModule { }

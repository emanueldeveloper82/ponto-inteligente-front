import { CadastrarPfService } from './services/cadastro-pf.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { CadastroPfComponent } from './cadastro-pf.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatInputModule,
         MatListModule,
         MatButtonModule,
         MatTooltipModule,
         MatIconModule,
         MatSnackBarModule
        } from '@angular/material';

@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    CadastrarPfService
  ]
})
export class CadastroPfModule { }

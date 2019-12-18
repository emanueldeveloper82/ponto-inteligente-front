import { FuncionarioModule } from './funcionario/funcionario.module';
import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/cadastro-pf-routing.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/cadastro-pj-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { LoginRoutingModule } from './autenticacao/login-routing.module';
import { LoginModule } from './autenticacao/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuncionarioRoutingModule } from './funcionario/funcionario-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.moddule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

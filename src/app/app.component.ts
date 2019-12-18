import { HttpUtilService } from './shared/services/http-util.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ponto-inteligente';

  constructor(private router: Router, private httpUtil: HttpUtilService) { }

  ngOnInit() { }

  sair() {
    delete localStorage['token'];
    this.router.navigate(['/']);
  }

  home() {

    const usuarioData = this.httpUtil.obterDadosUsuario();

    if(usuarioData['role'] == 'ROLE_ADMIN' ) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/funcionario']);
    }

    if(!this.autenticado()) {
      this.router.navigate(['/']);
    }
  }

  autenticado(): boolean {
    return localStorage['token'];
  }

}

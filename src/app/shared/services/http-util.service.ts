import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();

  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}

    return { headers: httpHeaders };
  }

  obterIdUsuario(): string {
  	if (!localStorage['token']) {
  	  return '';
  	}
  	const dadosUsuario = this.obterDadosUsuario();
  	return dadosUsuario ? dadosUsuario.idFuncionario : '';
  }

  obterIdEmpresa(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.idEmpresa : '';
  }

  obterDadosUsuario() {
    if (!localStorage['token']) {
      return '';
    }
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }


  obterPerfilUsuario() {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.role : '';
  }


}

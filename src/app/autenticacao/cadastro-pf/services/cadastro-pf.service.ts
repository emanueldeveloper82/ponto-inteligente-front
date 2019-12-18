
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../../../environments/environment';
import { CadastroPf } from './../models/cadastro-pf.model';

@Injectable({providedIn: 'root'})
export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPf: CadastroPf): Observable<any>  {
    return this.http.post( env.baseApiUrl + this.PATH, cadastroPf);
  }
}

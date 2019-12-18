import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../../../environments/environment';
import { CadastroPj } from './../models/cadastro-pj.model';



@Injectable({ providedIn: 'root' })
export class CadastrarPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPj: CadastroPj): Observable<any>  {
    return this.http.post( env.baseApiUrl + this.PATH, cadastroPj);
  }
}

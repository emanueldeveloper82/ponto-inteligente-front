import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import {environment as env } from '../../../environments/environment';
import { Lancamento } from '../models/lancamento.model';


@Injectable({providedIn: 'root'})
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{idFuncionario}/ultimo';
  private readonly PATH_LANCAMENTO = '/funcionario/{idFuncionario}';
  private readonly PATH_TODOS_LANC = '/funcionario/{idFuncionario}/todos';


  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }


  buscarUltimoTipoLancamento(): Observable<any> {
    return this.http.get(
      env.baseApiUrl +
      this.PATH +
      this.PATH_ULTIMO_LANC.replace(
          '{idFuncionario}',
           this.httpUtil.obterIdUsuario() ),
      this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
    return this.http.post(
      env.baseApiUrl + this.PATH, lancamento, this.httpUtil.headers()
    );
  }


  buscarTodosLancamentos(): Observable<any> {
    return this.http.get(
      env.baseApiUrl +
      this.PATH +
      this.PATH_TODOS_LANC.replace(
          '{idFuncionario}',
          this.httpUtil.obterIdUsuario()),
      this.httpUtil.headers()
    );
  }


  listarLancamentosPorFuncionario( idFuncionario: string,
                                   pagina: number,
                                   ordem: string,
                                   direcao: String ): Observable<any> {

    const url: string = env.baseApiUrl +
                        this.PATH +
                        this.PATH_LANCAMENTO.replace('{idFuncionario}', idFuncionario);

    const param: string = '?pag='+ pagina + '&ord='+ ordem + '&dir=' + direcao;

    return this.http.get(url + param, this.httpUtil.headers());
  }


  remover(lancamentoId: string): Observable<any> {
    return this.http.delete ( env.baseApiUrl +
       this.PATH + '/' +lancamentoId , this.httpUtil.headers()
    );
  }

  buscarPorId(lancamentoId: string): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + '/' + lancamentoId,
        this.httpUtil.headers()
    );
  }

  atualizar(lancamento: Lancamento): Observable<any> {
    return this.http.put(
        env.baseApiUrl + this.PATH + '/' + lancamento.id,
        lancamento,
        this.httpUtil.headers()
    );
  }


}

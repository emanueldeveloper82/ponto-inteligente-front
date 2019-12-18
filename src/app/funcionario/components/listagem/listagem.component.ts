import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService } from 'src/app/shared/services/lancamento.service';
import { MatSnackBar, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Lancamento } from '../../models/lancamento.model';
// import {Observable} from 'rxjs';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['dataLancamento', 'tipoLancamento', 'localizacao'];

  @ViewChild(MatSort,  {static: true}) sort: MatSort;
  @ViewChild(MatPaginator,  {static: true}) paginator: MatPaginator;

  constructor(
    private lancamentoService: LancamentoService,
    private matSnakBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.lancamentoService.buscarTodosLancamentos()
    .subscribe(
      data=>{
        const lancamentos = data['data'] as Lancamento[];
        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err=>{
        const msg: string = "Erro ao obter Lançamentos.";
        this.matSnakBar.open(msg, "Erro", {duration: 5000});
      }
    )
  }

}

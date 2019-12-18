import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TipoPonto } from '../../../shared/models/tipo-ponto.enum';
import { HttpUtilService } from '../../../shared/services/http-util.service';
import { LancamentoService } from '../../../shared/services/lancamento.service';
import { Lancamento } from '../../../shared/models/lancamento.model';

//Importando tudo da biblioteca momentJs
import * as moment from 'moment';

//Estrutura que obtem a geolocalização
//Pegando um objeto do tipo navigator externo ao angular.
declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  form: FormGroup;

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  descricao: string;
  ultimoTipoLancado: string;


  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private httpUtil: HttpUtilService,
    private lancamentoService: LancamentoService) {}

  ngOnInit() {
    this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      descricao:['']
    });
  }

  obterGeoLocation(): string {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>
        	this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`);
    }
    return '';
  }

  obterUltimoLancamento() {
    this.lancamentoService.buscarUltimoTipoLancamento().subscribe(
      data=>{
        this.ultimoTipoLancado = data.data ? data.data.tipoLancamento : '';
      },
      err=>{
        const msg: string = "Erro ao obter último lançamento.";
        this.snackBar.open(msg, "Erro", {duration: 5000});
      }
    )
  }

  obterUrlMapa(): string {
  	return "https://www.google.com/maps/search/?api=1&query=" +
  		this.geoLocation;
  }

  obterDescricao(): string {
  	return this.form.get('descricao').value;
  }


  iniciarTrabalho() {
    this.cadastrar(TipoPonto.INICIO_TRABALHO);
  }

  iniciarAlmoco() {
    this.cadastrar(TipoPonto.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(TipoPonto.TERMINO_ALMOCO);
  }

  terminarTrabalho() {
    this.cadastrar(TipoPonto.TERMINO_TRABALHO);
  }


  exibirInicioTrabalho(): boolean {
    return this.ultimoTipoLancado == '' ||
           this.ultimoTipoLancado == TipoPonto.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean {
    return this.ultimoTipoLancado == TipoPonto.TERMINO_ALMOCO; //this.ultimoTipoLancado == TipoPonto.INICIO_TRABALHO ||
  }

  exibirInicioAlmoco(): boolean {
    return this.ultimoTipoLancado == TipoPonto.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean {
    return this.ultimoTipoLancado == TipoPonto.INICIO_ALMOCO;
  }

  cadastrar(tipoPonto: TipoPonto ) {

    this.obterDescricao();

    const lancamento: Lancamento = new Lancamento(
      this.dataAtualEn,
      tipoPonto,
      this.geoLocation,
      this.httpUtil.obterIdUsuario(),
      this.obterDescricao()
    );

    this.lancamentoService.cadastrar(lancamento).subscribe(
      data=> {
        const msg: string = "Lançamento realizado com sucesso.";
        this.snackBar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/funcionario/listagem']);
      },
       err=> {
        let msg: string = "Erro ao tentar cadastrar. Tente mais tarde.";
        if (err.status == 400) {
          msg = err.error.erros.join(' ');
        }
        this.snackBar.open(msg, "Erro", {duration: 5000});
       }
    )
  }

}

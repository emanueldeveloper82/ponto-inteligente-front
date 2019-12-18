import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LancamentoService } from 'src/app/shared/services/lancamento.service';
import * as moment from 'moment';
import { TipoPonto } from 'src/app/shared/models/tipo-ponto.enum';
import { Lancamento } from 'src/app/funcionario/models/lancamento.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  horas: string[];
  minutos: string[];
  tipos: string[];
  descricao: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private lancamentoService: LancamentoService) { }

  ngOnInit() {
  	this.gerarForm();
  	this.horas = this.gerarListaNumeros(0, 23);
  	this.minutos = this.gerarListaNumeros(0, 59);
  	this.tipos = [
  		TipoPonto.INICIO_TRABALHO,
  		TipoPonto.INICIO_ALMOCO,
  		TipoPonto.TERMINO_ALMOCO,
  		TipoPonto.TERMINO_TRABALHO
    ];
    this.descricao = '';
  }

  gerarForm() {
    this.form = this.fb.group({
      data: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      horas: ['', [Validators.required]],
      minutos: ['', [Validators.required]],
      descricao:['']
    });
  }

  gerarListaNumeros(inicio: number, termino: number): string[] {
  	const numeros: string[] = Array();
  	for (let i = inicio; i <= termino; i++) {
  		let numero: string = i.toString();
  		if (i < 10) {
  			numero = "0" + numero;
  		}
  		numeros.push(numero);
  	}
  	return numeros;
  }

  cadastrar() {
    if (this.form.invalid) return;

    const dados = this.form.value;
    this.lancamentoService.cadastrar(this.obterLancamento(dados))
      .subscribe(
        data => {
          const msg: string = "Lançamento cadastrado com sucesso!";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/admin']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  obterLancamento(dados: any): Lancamento {
    //GERAR A DATA NO FORMATO pt-BR
    const data = moment(dados.data);
    data.set({
      hour: dados.horas,
      minute: dados.minutos,
      second: 0
    });

    return new Lancamento(
        data.format('YYYY-MM-DD HH:mm:ss'),
        dados.tipo,
        '',
        this.funcionarioId,
        dados.descricao,
      );
  }

  get funcionarioId(): string {
    return sessionStorage['funcionarioId'];
  }


}

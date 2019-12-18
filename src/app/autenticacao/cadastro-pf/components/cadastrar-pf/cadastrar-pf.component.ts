import { CpfValidator } from './../../../../shared/validators/cpf.validator';
import { CnpjValidator } from './../../../../shared/validators/cnpj.validator';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroPf } from './../../models/cadastro-pf.model';
import { CadastrarPfService } from './../../services/cadastro-pf.service';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  //Injetando dependencias abaixo
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPfService: CadastrarPfService ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
     email: ['', [Validators.required, Validators.email]],
     senha: ['', [Validators.required, Validators.minLength(6)]],
       cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPf() {

    if(this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;

    this.cadastrarPfService.cadastrar(cadastroPf)
    .subscribe (
      data => {
        console.log(JSON.stringify(data));
        const msg: string = "Realize o login para acessar o sistema.";
        this.snackBar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/login']);
      },
      err => {
        console.log(JSON.stringify(err));
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
      }
    );
    // alert(JSON.stringify(cadastroPf));
    return false;
  }


}

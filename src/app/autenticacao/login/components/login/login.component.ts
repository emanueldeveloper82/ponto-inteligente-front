import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Login} from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Ligação com o html
  form: FormGroup;

  constructor( private fb: FormBuilder,
               private snackBar: MatSnackBar,
               private router: Router,
               private loginService: LoginService) {

               }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  logar() {
    if(this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe (
        data => {
          // console.log(JSON.stringify(data));
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1])
          );
          if(usuarioData['role'] == 'ROLE_ADMIN' ) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/funcionario']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          let msg: string = "Tente novamente em instantes.";
          if(err['status'] == 401) {
            msg = "E-mail ou Senha inválido(s).";
          }
          this.snackBar.open(msg, "Erro", {duration: 5000});
        }
      );
  }

}

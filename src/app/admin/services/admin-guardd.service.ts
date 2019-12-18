import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpUtilService } from 'src/app/shared/services/http-util.service';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {

  constructor(
    private httpUtilService: HttpUtilService,
    private router: Router
  ) {}

  canActivate(): boolean {

    if (this.httpUtilService.obterPerfilUsuario() === 'ROLE_ADMIN') {
      return true;
    }
    this.router.navigate(['/funcionario'])
    return false;
  }


}

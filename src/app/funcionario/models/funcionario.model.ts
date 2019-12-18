import { Lancamento } from './lancamento.model';

export class Funcionario {

  constructor(
    public nome: string,
    public email: string,
    public cpf: string,
    public perfil: string,
    public valorHora?: string,
    public qtdHorasTrabalhadoDia?: string,
    public qtdHorasAlmoco?: string,
    public lancamento?: Lancamento,
    public  id?: string
  ) {}

}

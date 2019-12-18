
export class Lancamento {

  constructor(
    public dataLancamento: string,
    public tipoLancamento: string,
    public localizacao: string,
    public funcionarioId: string,
    public descricao?: string,
    public id?: string
  ){ }

}


export class Posicao{
    constructor(public linha:number,public coluna:number){}

    definirPosicao(linha:number,coluna:number){
        this.linha = linha;
        this.coluna=coluna;
    }

    toString():string{
        return `${this.linha}, ${this.coluna}`;
    }
}
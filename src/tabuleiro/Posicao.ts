export class Posicao{
    constructor(public linha:number,public coluna:number){}

    toString():string{
        return `${this.linha}, ${this.coluna}`;
    }
}
import { Posicao } from "../tabuleiro/Posicao";


export class PosicaoXadrez{
    constructor(public coluna:number,public linha:number){

    }

    toPosicao():Posicao{
        return new Posicao(8-this.linha,8-this.coluna)
    }
}
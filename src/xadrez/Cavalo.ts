import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Cavalo extends Peca{

    public imagem: string | null | undefined = this.Cor === Cor.Branca?
     'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/cavalo.jpg?raw=true'
     :'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/cavalo.jpg?raw=true';


    movimentosPossiveis(posicao: Posicao): boolean {

        if(this.posicao?.linha - 2 === posicao.linha && this.posicao?.coluna - 1 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha - 2 === posicao.linha && this.posicao?.coluna + 1 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha + 2 === posicao.linha && this.posicao?.coluna - 1 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha + 2 === posicao.linha && this.posicao?.coluna + 1 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha - 1 === posicao.linha && this.posicao?.coluna - 2 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha + 1 === posicao.linha && this.posicao?.coluna - 2 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha - 1 === posicao.linha && this.posicao?.coluna + 2 === posicao.coluna && this.podeMover(posicao) ) return true;
        if(this.posicao?.linha + 1 === posicao.linha && this.posicao?.coluna + 2 === posicao.coluna && this.podeMover(posicao) ) return true;

        return false;
        
    }
    toString(): string {
       return "Cavalo";
    }

}
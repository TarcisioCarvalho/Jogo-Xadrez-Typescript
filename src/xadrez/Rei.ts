import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Rei extends Peca{
   
    public imagem: string | null | undefined = this.Cor === Cor.Branca?
     'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/rei.jpg?raw=true'
     :'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/rei.jpg?raw=true';

     movimentosPossiveis(posicao:Posicao): boolean {
        //Cima
        if((this.posicao?.coluna === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
        //NE
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Direita
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)) return true;
        //SE
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Baixo
        if((this.posicao?.coluna === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //SO
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Esquerda
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)) return true;
        //NO
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
      /*   if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha === posicao.linha)) return true;
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha)) return true;
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha === posicao.linha)) return true; */
       /*  if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true; */
      /*  if((Number(this.posicao?.coluna!)+1)===Number(posicao.coluna)) return true;
       if((Number(this.posicao?.coluna!)-1)===Number(posicao.coluna)) return true;
       if((Number(this.posicao?.linha!)+1) ===Number(posicao.linha)) return true;
       if((Number(this.posicao?.linha!)-1) ===Number(posicao.linha)) return true; */

       return false

    }

    toString():string{
        return "Rei";
    }
}
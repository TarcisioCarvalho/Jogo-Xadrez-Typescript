import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Bispo extends Peca{

    public imagem: string | null | undefined = this.Cor === Cor.Branca?
    'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/bispo.jpg?raw=true'
    :'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/bispo.jpg?raw=true';



    movimentosPossiveis(posicao: Posicao): boolean {

        const p:Posicao = new Posicao(posicao.linha,posicao.coluna);
        let contador = 0;
        //No
        while (this.posicao?.linha! > p.linha && this.posicao?.coluna! > p.coluna) {
            if(this.tabuleiro.Mostrapeca(p) !== null
            && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha )) return false

            contador++;
            p.linha+=1;
            p.coluna+=1;
        }

        if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha - contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao)) return true;
       

         
         while (this.posicao?.linha! > p.linha && this.posicao?.coluna! < p.coluna) {
            if(this.tabuleiro.Mostrapeca(p) !== null
            && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha)) return false;

            contador++;
            p.linha+=1;
            p.coluna-=1;
        }

        if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha! - contador === posicao.linha && this.posicao?.coluna! + contador === posicao.coluna && this.podeMover(posicao)) return true;

       
       while (this.posicao?.linha! < p.linha && this.posicao?.coluna! < p.coluna) {
        if(this.tabuleiro.Mostrapeca(p) !== null
        && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha)) return false;
      
        contador++;
        p.linha -= 1;
        p.coluna -= 1;
    }


   if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha! - contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao)) return true;

   
   while (this.posicao?.linha! < p.linha && this.posicao?.coluna! > p.coluna) {
    if(this.tabuleiro.Mostrapeca(p) !== null
    && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha)) return false;

    contador++;
    p.linha -= 1;
    p.coluna -= 1;
}


if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha! + contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao)) return true;

        return false
    }
    toString(): string {
        return "Bispo";
    }

}
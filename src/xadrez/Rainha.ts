import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Rainha extends Peca{
  
    public imagem: string | null | undefined = this.Cor === Cor.Branca?
     'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/rainha.jpg?raw=true'
     :'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/rainha.jpg?raw=true';

     movimentosPossiveis(posicao: Posicao): boolean {

        const p:Posicao = new Posicao(posicao.linha,posicao.coluna);
        let contador = 0;

        //Baixo
        
             while(this.posicao?.linha < p.linha){
                 if(this.tabuleiro.Mostrapeca(p)!==null
                 && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || 
                 p.linha !== posicao.linha
                 )) return false
                 p.linha-=1;
                /*  {
                     return false
                     if(this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor) return false;
                     if(p.linha !== posicao.linha) return false;
                 } */
                 
             }
        if(this.posicao.linha < posicao.linha && this.posicao?.coluna === posicao.coluna) return true;
       
        //Cima
 
        while(this.posicao?.linha>p.linha){
         if(this.tabuleiro.Mostrapeca(p)!==null
         && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || 
         p.linha !== posicao.linha
         )) return false
         p.linha+=1;
        }
 
        if(this.posicao.linha > posicao.linha && this.posicao?.coluna === posicao.coluna) return true;
 
        //Direita
 
        while(this.posicao?.coluna<p.coluna){
         if(this.tabuleiro.Mostrapeca(p)!==null
         && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || 
         p.coluna !== posicao.coluna
         )) return false
         p.coluna-=1;
        }
 
        if(this.posicao?.coluna < posicao?.coluna && this.posicao?.linha === posicao.linha) return true;
 
        //Esquerda
 
        while(this.posicao?.coluna>p.coluna){
         if(this.tabuleiro.Mostrapeca(p)!==null
         && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || 
         p.coluna !== posicao.coluna
         )) return false
         p.coluna+=1;
        }
 
        if(this.posicao?.coluna > posicao?.coluna && this.posicao?.linha === posicao.linha) return true;

        while (this.posicao?.linha! > p.linha && this.posicao?.coluna! > p.coluna) {
            if(this.tabuleiro.Mostrapeca(p) !== null
            && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha )) return false

            contador++;
            p.linha+=1;
            p.coluna+=1;
        }
       if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha - contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao)) return true;
       

         //Ne
         while (this.posicao?.linha! > p.linha && this.posicao?.coluna! < p.coluna) {
            if(this.tabuleiro.Mostrapeca(p) !== null
            && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha)) return false;

            contador++;
            p.linha+=1;
            p.coluna-=1;
        }
  

       if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha! - contador === posicao.linha && this.posicao?.coluna! + contador === posicao.coluna && this.podeMover(posicao)) return true;

       //Ne
       while (this.posicao?.linha! < p.linha && this.posicao?.coluna! < p.coluna) {
        if(this.tabuleiro.Mostrapeca(p) !== null
        && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha)) return false;

        contador++;
        p.linha -= 1;
        p.coluna -= 1;
    }


   if(this.posicao?.linha!==posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha! + contador === posicao.linha && this.posicao?.coluna + contador === posicao.coluna && this.podeMover(posicao)) return true;

   //Ne
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
        return "Rainha";
    }
}
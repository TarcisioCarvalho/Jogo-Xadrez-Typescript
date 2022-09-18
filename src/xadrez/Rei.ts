import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Rei extends Peca{
   
    public imagem: string | null | undefined = this.Cor === Cor.Branca?
     'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/rei.jpg?raw=true'
     :'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/rei.jpg?raw=true';

     

    private testeParaRoque(posicao:Posicao):boolean{
      const possivelTorre:Peca = this.tabuleiro.Mostrapeca(posicao);
      return possivelTorre !== null && possivelTorre.qtdMovimentos === 0 && this.Cor === possivelTorre.Cor && possivelTorre.toString() === "Torre";
    }

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
     
        //Jogada Especial Roque
        if(this.qtdMovimentos === 0){
         
          //Roque Pequeno
          const posicaoVerificaTorre:Posicao = this.Cor === Cor.Branca? new Posicao(7,7): new Posicao(0,7);
         
          if(this.testeParaRoque(posicaoVerificaTorre)){
            const posicao1 = new Posicao(this.posicao?.linha,this.posicao?.coluna+1);
            const posicao2 = new Posicao(this.posicao?.linha,this.posicao?.coluna+2);
            if(this.tabuleiro.Mostrapeca(posicao1) === null && this.tabuleiro.Mostrapeca(posicao2) === null
            && (this.posicao?.coluna + 2 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)
            ) return true;
          }
          //Roque Grande 
          const posicaoVerificaTorreRoqueGrande:Posicao = this.Cor === Cor.Branca? new Posicao(7,0): new Posicao(0,0);

          if(this.testeParaRoque(posicaoVerificaTorreRoqueGrande)){
            
            const posicao1 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 1);
            const posicao2 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 2);
            const posicao3 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 3);
            

            if(this.tabuleiro.Mostrapeca(posicao1) === null &&
              this.tabuleiro.Mostrapeca(posicao2) === null &&
              this.tabuleiro.Mostrapeca(posicao3) === null &&
              (this.posicao?.coluna - 2 === posicao.coluna) &&
              (this.posicao?.linha === posicao.linha) &&
              this.podeMover(posicao)
              ) return true;
             

          }

        /*   if(this.testeParaRoque(posicaoVerificaTorreRoqueGrande)){
            const posicao1 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 1);
            const posicao2 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 2);
            const posicao3 = new Posicao(this.posicao?.linha,this.posicao?.coluna - 3);
            console.log(this.tabuleiro.Mostrapeca(posicao1) === null && this.tabuleiro.Mostrapeca(posicao2) === null && this.tabuleiro.Mostrapeca(posicao3) === null);
            if(this.tabuleiro.Mostrapeca(posicao1) === null && this.tabuleiro.Mostrapeca(posicao2) === null && this.tabuleiro.Mostrapeca(posicao3) === null
            && (this.posicao?.coluna - 2 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)
            ) return true; */
        }
       return false

    }

    toString():string{
        return "Rei";
    }
}
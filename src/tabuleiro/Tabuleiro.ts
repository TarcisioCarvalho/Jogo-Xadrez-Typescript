import { Cor } from "./Enums/Cor.js";
import { TabuleiroError } from "./Erros/TabuleiroError.js";
import { Peca } from "./Peca.js";
import { Posicao } from "./Posicao.js";


    export class Tabuleiro{

        public peca:Peca|null[][] 

        constructor(public linhas:number=8,public colunas:number=8){
            this.peca = []
            this.peca = new Array(8).fill(null).map(()=> new Array(8).fill(null));
        }

        Mostrapeca(posicao?:Posicao) : Peca|null{
            
                
                if(posicao)return this.peca[posicao.linha][posicao.coluna];
               
                return null;
          
            
        }

        existePecaCorAdversaria(posicao:Posicao,cor:Cor):boolean{
            return this.Mostrapeca(posicao) !== null && this.Mostrapeca(posicao)?.Cor !== cor;
        }

        existePeca(posicao:Posicao):boolean{
            this.validaPosicao(posicao)

            return this.Mostrapeca(posicao) !== null;
        }

        validaPosicao(posicao:Posicao):void{
            if(!this.posicaoValida(posicao)) throw new TabuleiroError("Posição Inválida");
        }

        posicaoValida(posicao:Posicao):boolean{

            if( posicao.linha<0 ||
                posicao.linha>=this.linhas ||
                posicao.coluna<0 ||
                posicao.coluna>=this.colunas) return false

            return true
        }

        retiraPeca(posicao:Posicao):Peca|null{
           
            if(!this.existePeca(posicao)) return null

           const pecaAux:Peca|null = this.Mostrapeca(posicao);
            
           this.peca[posicao.linha][posicao.coluna] = null;
            
           return pecaAux;
        }

        colocaPeca(peca:Peca,posicao:Posicao){
           if (this.existePeca(posicao)) throw new TabuleiroError("Já existe Peça nessa posição"); 
            
           
            this.peca[posicao.linha][posicao.coluna] = peca;
            peca.posicao=posicao;
        }
      
    }


    

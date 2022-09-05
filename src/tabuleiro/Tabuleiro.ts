import { Peca } from "./Peca.js";
import { Posicao } from "./Posicao.js";


    export class Tabuleiro{

        public peca:Peca|null[][] 

        constructor(public linhas:number=8,public colunas:number=8){
            this.peca = []
            this.peca = new Array(8).fill(null).map(()=> new Array(8).fill(null));
        }

        Mostrapeca(linha:number=8,coluna:number=8) : Peca|null{
            return this.peca[linha][coluna];
        }

        colocaPeca(peca:Peca,posicao:Posicao){
            this.peca[posicao.linha][posicao.coluna] = peca;
            peca.posicao=posicao;
        }
      
    }


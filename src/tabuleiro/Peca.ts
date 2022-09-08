
import { Cor } from "./Enums/Cor.js";
import { Posicao } from "./Posicao.js";
import { Tabuleiro } from "./Tabuleiro.js";

    export abstract class Peca{
        
        public posicao:Posicao|null = null;
        public imagem:string|null|undefined;
        private qtdMovimentos:number = 0;
        
        constructor(public Cor:Cor,public tabuleiro:Tabuleiro){}

        public incrementaQtdMovimentos():void{
            this.qtdMovimentos++;
        }

        public podeMover(posicao:Posicao):boolean{
            const p:Peca = this.tabuleiro.Mostrapeca(posicao)!;

            return p === null || p.Cor !== this.Cor;
        }

        abstract movimentosPossiveis(posicao:Posicao):boolean;

       

        abstract toString():string;

    }

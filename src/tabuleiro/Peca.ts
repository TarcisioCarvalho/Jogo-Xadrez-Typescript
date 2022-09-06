
import { Cor } from "./Enums/Cor.js";
import { Posicao } from "./Posicao.js";
import { Tabuleiro } from "./Tabuleiro.js";

    export abstract class Peca{
        
        public posicao:Posicao|null = null;
        public imagem:string|null|undefined;
        
        
        constructor(public Cor:Cor,public tabuleiro:Tabuleiro){}

        public podeMover(posicao:Posicao):boolean{
            const p:Peca = this.tabuleiro.Mostrapeca(undefined,undefined,posicao)!;

            return p === null || p.Cor !== this.Cor;
        }

        abstract movimentosPossiveis(posicao:Posicao):boolean;

       

        abstract toString():string;

    }

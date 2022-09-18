
import { Cor } from "./Enums/Cor.js";
import { Posicao } from "./Posicao.js";
import { Tabuleiro } from "./Tabuleiro.js";

    export abstract class Peca{
        
        public posicao:Posicao|null = null;
        public imagem:string|null|undefined;
        
        private _qtdMovimentos : number;
        public get qtdMovimentos() : number {
            return this._qtdMovimentos;
        }
        private set qtdMovimentos(v : number) {
            this._qtdMovimentos = v;
        }
        
        
        constructor(public Cor:Cor,public tabuleiro:Tabuleiro){
            this._qtdMovimentos = 0;
        }

        public incrementaQtdMovimentos():void{
            this.qtdMovimentos++;
        }

        public decrementaQtdMovimentos():void{
            this.qtdMovimentos--;
        }

        public podeMover(posicao:Posicao):boolean{
            const p:Peca = this.tabuleiro.Mostrapeca(posicao)!;

            return p === null || p.Cor !== this.Cor;
        }

        abstract movimentosPossiveis(posicao:Posicao):boolean;

       

        abstract toString():string;

    }

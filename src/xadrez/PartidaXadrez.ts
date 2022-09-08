import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";
import { Tabuleiro } from "../tabuleiro/Tabuleiro.js";
import { Rei } from "./Rei.js";
import { Torre } from "./Torre.js";

export class PartidaXadrez{
    
    private _turno : number;
    private _jogadorAtual : Cor;



    public get jogadorAtual() : Cor {
        return this._jogadorAtual;
    }
    public set jogadorAtual(v : Cor) {
        this._jogadorAtual = v;
    }
    
    public get turno() : number {
        return this._turno;
    }
    private set turno(v : number) {
        this._turno = v;
    }
    

    constructor
        (
        public tabuleiro:Tabuleiro,
        public pecasEmJogo:Peca[]=[],
        public pecasCapturada:Peca[]=[]
        )
        {
        this._turno = 1;
        this._jogadorAtual = Cor.Branca;
        }

        public colocaNovaPeca(peca:Peca,posicao:Posicao):void{
            this.tabuleiro.colocaPeca(peca,posicao);
            this.pecasEmJogo.push(peca);
        }

        public  colocaPecas():void{
            
            this.colocaNovaPeca(new Rei(Cor.Branca,this.tabuleiro),new Posicao(7,3));
            this.colocaNovaPeca(new Torre(Cor.Branca,this.tabuleiro),new Posicao(7,0));
            this.colocaNovaPeca(new Torre(Cor.Branca,this.tabuleiro),new Posicao(7,7));
            this.colocaNovaPeca(new Rei(Cor.Preta,this.tabuleiro),new Posicao(0,3));
            this.colocaNovaPeca(new Torre(Cor.Preta,this.tabuleiro),new Posicao(0,0));
            this.colocaNovaPeca(new Torre(Cor.Preta,this.tabuleiro),new Posicao(0,7));
        }

}
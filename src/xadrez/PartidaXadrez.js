import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Posicao } from "../tabuleiro/Posicao.js";
import { Rei } from "./Rei.js";
import { Torre } from "./Torre.js";
export class PartidaXadrez {
    constructor(tabuleiro, pecasEmJogo = [], pecasCapturada = []) {
        this.tabuleiro = tabuleiro;
        this.pecasEmJogo = pecasEmJogo;
        this.pecasCapturada = pecasCapturada;
        this._turno = 1;
        this._jogadorAtual = Cor.Branca;
    }
    get jogadorAtual() {
        return this._jogadorAtual;
    }
    set jogadorAtual(v) {
        this._jogadorAtual = v;
    }
    get turno() {
        return this._turno;
    }
    set turno(v) {
        this._turno = v;
    }
    colocaNovaPeca(peca, posicao) {
        this.tabuleiro.colocaPeca(peca, posicao);
        this.pecasEmJogo.push(peca);
    }
    colocaPecas() {
        this.colocaNovaPeca(new Rei(Cor.Branca, this.tabuleiro), new Posicao(7, 3));
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 0));
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 7));
        this.colocaNovaPeca(new Rei(Cor.Preta, this.tabuleiro), new Posicao(0, 3));
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 0));
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 7));
    }
}

import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Posicao } from "../tabuleiro/Posicao.js";
import { Bispo } from "./Bispo.js";
import { Cavalo } from "./Cavalo.js";
import { Peao } from "./Peao.js";
import { Rainha } from "./Rainha.js";
import { Rei } from "./Rei.js";
import { Torre } from "./Torre.js";
export class PartidaXadrez {
    constructor(tabuleiro, pecasEmJogo = [], pecasCapturadas = []) {
        this.tabuleiro = tabuleiro;
        this.pecasEmJogo = pecasEmJogo;
        this.pecasCapturadas = pecasCapturadas;
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
    colocaNovaPeca(peca, posicao, tabuleiro = this.tabuleiro) {
        tabuleiro.colocaPeca(peca, posicao);
        this.pecasEmJogo.push(peca);
    }
    colocaPecas(tabuleiro = this.tabuleiro) {
        this.colocaNovaPeca(new Rei(Cor.Branca, this.tabuleiro, this), new Posicao(7, 4), tabuleiro);
        this.colocaNovaPeca(new Rainha(Cor.Branca, this.tabuleiro), new Posicao(7, 3), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 0), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 7), tabuleiro);
        this.colocaNovaPeca(new Cavalo(Cor.Branca, this.tabuleiro), new Posicao(7, 6), tabuleiro);
        this.colocaNovaPeca(new Cavalo(Cor.Branca, this.tabuleiro), new Posicao(7, 1), tabuleiro);
        this.colocaNovaPeca(new Bispo(Cor.Branca, this.tabuleiro), new Posicao(7, 2), tabuleiro);
        this.colocaNovaPeca(new Bispo(Cor.Branca, this.tabuleiro), new Posicao(7, 5), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 7), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 6), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 5), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 4), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 3), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 2), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 1), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Branca, this.tabuleiro), new Posicao(6, 0), tabuleiro);
        this.colocaNovaPeca(new Rei(Cor.Preta, this.tabuleiro, this), new Posicao(0, 4), tabuleiro);
        this.colocaNovaPeca(new Rainha(Cor.Preta, this.tabuleiro), new Posicao(0, 3), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 0), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 7), tabuleiro);
        this.colocaNovaPeca(new Cavalo(Cor.Preta, this.tabuleiro), new Posicao(0, 6), tabuleiro);
        this.colocaNovaPeca(new Cavalo(Cor.Preta, this.tabuleiro), new Posicao(0, 1), tabuleiro);
        this.colocaNovaPeca(new Bispo(Cor.Preta, this.tabuleiro), new Posicao(0, 2), tabuleiro);
        this.colocaNovaPeca(new Bispo(Cor.Preta, this.tabuleiro), new Posicao(0, 5), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 7), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 6), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 5), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 4), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 3), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 2), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 1), tabuleiro);
        this.colocaNovaPeca(new Peao(Cor.Preta, this.tabuleiro), new Posicao(1, 0), tabuleiro);
    }
    mudaJogador() {
        this.jogadorAtual = this.jogadorAtual === Cor.Branca ?
            Cor.Preta :
            Cor.Branca;
    }
    rei(cor) {
        return this.pecasEmJogo.find(peca => (peca.toString() === 'Rei' && peca.Cor === cor));
    }
    desfazJogada(origem, destino, pecaRetirada) {
        const pecaMovimentada = this.tabuleiro.retiraPeca(destino);
        pecaMovimentada?.decrementaQtdMovimentos();
        if (pecaRetirada !== null) {
            this.tabuleiro.colocaPeca(pecaRetirada, destino);
            this.pecasEmJogo.push(pecaRetirada);
        }
        this.tabuleiro.colocaPeca(pecaMovimentada, origem);
    }
    corAdversaria() {
        return this.jogadorAtual === Cor.Branca ? Cor.Preta : Cor.Branca;
    }
    xequeMate() {
        if (!this.coloqueiEmXeque())
            return false;
        let flag = true;
        const pecaRei = this.rei(this.corAdversaria());
        const pecasCorAliada = this.pecasEmJogo.filter(pecaAliada => pecaAliada.Cor !== this.jogadorAtual);
        pecasCorAliada.forEach(peca => {
            const origem = peca.posicao;
            for (let i = 0; i < this.tabuleiro.linhas; i++) {
                for (let j = 0; j < this.tabuleiro.colunas; j++) {
                    const destino = new Posicao(i, j);
                    if (peca.movimentosPossiveis(destino)) {
                        const pecaAMovimentar = this.tabuleiro.retiraPeca(origem);
                        const pecaRetirada = this.tabuleiro.retiraPeca(destino);
                        if (pecaRetirada !== null)
                            this.pecasEmJogo = this.pecasEmJogo
                                .filter(pecaEmJogo => pecaEmJogo !== pecaRetirada);
                        this.tabuleiro.colocaPeca(pecaAMovimentar, destino, true);
                        if (!this.coloqueiEmXeque())
                            flag = false;
                        this.tabuleiro.colocaPeca(peca, origem);
                        this.tabuleiro.retiraPeca(destino);
                        if (pecaRetirada !== null) {
                            this.tabuleiro.colocaPeca(pecaRetirada, destino);
                            this.pecasEmJogo.push(pecaRetirada);
                        }
                        ;
                    }
                }
            }
        });
        return flag;
    }
    coloqueiEmXeque() {
        return this.estaEmXeque(this.corAdversaria());
    }
    meColoqueiEmXeque() {
        return this.estaEmXeque(this.jogadorAtual);
    }
    estaEmXeque(cor) {
        let flag = false;
        const pecaRei = this.rei(cor);
        const pecasCorAdversaria = this.pecasEmJogo.filter(pecaAdversaria => pecaAdversaria.Cor !== cor);
        pecasCorAdversaria.forEach(pecaCorAdversaria => {
            if (pecaCorAdversaria.movimentosPossiveis(pecaRei?.posicao)) {
                flag = true;
            }
        });
        return flag;
    }
}

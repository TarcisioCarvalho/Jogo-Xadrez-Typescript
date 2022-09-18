export class Peca {
    constructor(Cor, tabuleiro) {
        this.Cor = Cor;
        this.tabuleiro = tabuleiro;
        this.posicao = null;
        this._qtdMovimentos = 0;
    }
    get qtdMovimentos() {
        return this._qtdMovimentos;
    }
    set qtdMovimentos(v) {
        this._qtdMovimentos = v;
    }
    incrementaQtdMovimentos() {
        this.qtdMovimentos++;
    }
    decrementaQtdMovimentos() {
        this.qtdMovimentos--;
    }
    podeMover(posicao) {
        const p = this.tabuleiro.Mostrapeca(posicao);
        return p === null || p.Cor !== this.Cor;
    }
}

export class Peca {
    constructor(Cor, tabuleiro) {
        this.Cor = Cor;
        this.tabuleiro = tabuleiro;
        this.posicao = null;
    }
    podeMover(posicao) {
        const p = this.tabuleiro.Mostrapeca(posicao);
        return p === null || p.Cor !== this.Cor;
    }
}

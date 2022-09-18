import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";
export class Peao extends Peca {
    constructor() {
        super(...arguments);
        this.imagem = this.Cor === Cor.Branca ?
            'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/peao.jpg?raw=true'
            : 'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/peao.jpg?raw=true';
    }
    movimentosPossiveis(posicao) {
        switch (this.Cor) {
            case Cor.Branca:
                if (this.posicao?.linha - 1 === posicao.linha && this.posicao?.coluna === posicao.coluna && !this.tabuleiro.existePeca(posicao))
                    return true;
                if (this.qtdMovimentos === 0 && this.posicao?.linha - 2 === posicao.linha && this.posicao?.coluna === posicao.coluna && !this.tabuleiro.existePeca(posicao))
                    return true;
                if (this.posicao?.linha - 1 === posicao.linha && this.posicao?.coluna - 1 === posicao.coluna && this.tabuleiro.existePecaCorAdversaria(posicao, Cor.Branca))
                    return true;
                if (this.posicao?.linha - 1 === posicao.linha && this.posicao?.coluna + 1 === posicao.coluna && this.tabuleiro.existePecaCorAdversaria(posicao, Cor.Branca))
                    return true;
                // Jogada Especial EnPassant
                if (this.posicao?.linha === 3) {
                    if (this.posicao.coluna - 1 === posicao.coluna && this.posicao.linha - 1 === posicao.linha) {
                        const esquerda = new Posicao(this.posicao.linha, this.posicao.coluna - 1);
                        return this.verificaEnPassant(posicao, esquerda, Cor.Branca);
                    }
                    if (this.posicao.coluna + 1 === posicao.coluna && this.posicao.linha - 1 === posicao.linha) {
                        const direita = new Posicao(this.posicao.linha, this.posicao.coluna + 1);
                        return this.verificaEnPassant(posicao, direita, this.Cor);
                    }
                }
                break;
            case Cor.Preta:
                if (this.posicao?.linha + 1 === posicao.linha && this.posicao?.coluna === posicao.coluna && !this.tabuleiro.existePeca(posicao))
                    return true;
                if (this.qtdMovimentos === 0 && this.posicao?.linha + 2 === posicao.linha && this.posicao?.coluna === posicao.coluna && !this.tabuleiro.existePeca(posicao))
                    return true;
                if (this.posicao?.linha + 1 === posicao.linha && this.posicao?.coluna - 1 === posicao.coluna && this.tabuleiro.existePecaCorAdversaria(posicao, Cor.Preta))
                    return true;
                if (this.posicao?.linha + 1 === posicao.linha && this.posicao?.coluna + 1 === posicao.coluna && this.tabuleiro.existePecaCorAdversaria(posicao, Cor.Preta))
                    return true;
                // Jogada Especial EnPassant
                if (this.posicao?.linha === 4) {
                    if (this.posicao.coluna - 1 === posicao.coluna && this.posicao.linha + 1 === posicao.linha) {
                        const esquerda = new Posicao(this.posicao.linha, this.posicao.coluna - 1);
                        return this.verificaEnPassant(posicao, esquerda, Cor.Preta);
                    }
                    if (this.posicao.coluna + 1 === posicao.coluna && this.posicao.linha + 1 === posicao.linha) {
                        const direita = new Posicao(this.posicao.linha, this.posicao.coluna + 1);
                        return this.verificaEnPassant(posicao, direita, Cor.Preta);
                    }
                }
                break;
            default:
                break;
        }
        return false;
    }
    verificaEnPassant(posicao, direcao, cor) {
        if (this.tabuleiro.posicaoValida(direcao) &&
            this.tabuleiro.existePecaCorAdversaria(direcao, cor) &&
            this.tabuleiro.vuneravelEnPassant === this.tabuleiro.Mostrapeca(direcao) &&
            this.podeMover(posicao))
            return true;
        return false;
    }
    toString() {
        return "Peao";
    }
}

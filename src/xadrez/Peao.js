import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
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
                break;
            default:
                break;
        }
        return false;
    }
    toString() {
        return "Peao";
    }
}

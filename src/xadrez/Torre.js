import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";
export class Torre extends Peca {
    constructor() {
        super(...arguments);
        this.imagem = this.Cor === Cor.Branca ?
            'data:image/png;base64,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'
            : 'https://i.pinimg.com/originals/a2/43/21/a24321d3060379def7dd0e1c7d53af47.jpg';
    }
    movimentosPossiveis(posicao) {
        //Baixo
        if (this.posicao?.linha < posicao.linha) {
            const p = new Posicao(this.posicao?.linha + 1, this.posicao?.coluna);
            while (p.linha < posicao.linha) {
                if (this.tabuleiro.Mostrapeca(undefined, undefined, p) !== null)
                    return false;
                p.definirPosicao(p.linha + 1, p.coluna);
            }
            return true;
        }
        //Cima
        if (this.posicao?.linha > posicao.linha) {
            const p = new Posicao(this.posicao?.linha - 1, this.posicao?.coluna);
            while (p.linha > posicao.linha) {
                if (this.tabuleiro.Mostrapeca(undefined, undefined, p) !== null)
                    return false;
                p.definirPosicao(p.linha - 1, p.coluna);
            }
            return true;
        }
        //Direita
        if (this.posicao?.coluna < posicao.coluna) {
            const p = new Posicao(this.posicao?.linha, this.posicao?.coluna + 1);
            while (p.coluna < posicao.coluna) {
                if (this.tabuleiro.Mostrapeca(undefined, undefined, p) !== null)
                    return false;
                p.definirPosicao(p.linha, p.coluna + 1);
            }
            return true;
        }
        //Esquerda
        if (this.posicao?.coluna > posicao.coluna) {
            const p = new Posicao(this.posicao?.linha, this.posicao?.coluna - 1);
            while (p.coluna > posicao.coluna) {
                if (this.tabuleiro.Mostrapeca(undefined, undefined, p) !== null)
                    return false;
                p.definirPosicao(p.linha, p.coluna - 1);
            }
            return true;
        }
    }
    toString() {
        return "T";
    }
}

import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";
export class Rainha extends Peca {
    constructor() {
        super(...arguments);
        this.imagem = this.Cor === Cor.Branca ?
            'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/brancas/rainha.jpg?raw=true'
            : 'https://github.com/TarcisioCarvalho/Jogo-Xadrez-Typescript/blob/main/src/assets/img/pretas/rainha.jpg?raw=true';
    }
    movimentosPossiveis(posicao) {
        const p = new Posicao(posicao.linha, posicao.coluna);
        let contador = 0;
        //Baixo
        while (this.posicao?.linha < p.linha && this.posicao?.coluna === p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor ||
                    p.linha !== posicao.linha))
                return false;
            p.linha -= 1;
            /*  {
                 return false
                 if(this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor) return false;
                 if(p.linha !== posicao.linha) return false;
             } */
        }
        if (this.posicao.linha < posicao.linha && this.posicao?.coluna === posicao.coluna)
            return true;
        //Cima
        while (this.posicao?.linha > p.linha && this.posicao?.coluna === p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor ||
                    p.linha !== posicao.linha))
                return false;
            p.linha += 1;
        }
        if (this.posicao.linha > posicao.linha && this.posicao?.coluna === posicao.coluna)
            return true;
        //Direita
        while (this.posicao?.coluna < p.coluna && this.posicao?.linha === p.linha) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor ||
                    p.coluna !== posicao.coluna))
                return false;
            p.coluna -= 1;
        }
        if (this.posicao?.coluna < posicao?.coluna && this.posicao?.linha === posicao.linha)
            return true;
        //Esquerda
        while (this.posicao?.coluna > p.coluna && this.posicao?.linha === p.linha) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor ||
                    p.coluna !== posicao.coluna))
                return false;
            p.coluna += 1;
        }
        //Noroeste
        while (this.posicao?.linha > p.linha && this.posicao?.coluna > p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha))
                return false;
            contador++;
            p.linha += 1;
            p.coluna += 1;
        }
        if (this.posicao?.linha !== posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha - contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao))
            return true;
        //Nordeste
        while (this.posicao?.linha > p.linha && this.posicao?.coluna < p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha))
                return false;
            contador++;
            p.linha += 1;
            p.coluna -= 1;
        }
        if (this.posicao?.linha !== posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha - contador === posicao.linha && this.posicao?.coluna + contador === posicao.coluna && this.podeMover(posicao))
            return true;
        //Sudeste
        while (this.posicao?.linha < p.linha && this.posicao?.coluna < p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha))
                return false;
            contador++;
            p.linha -= 1;
            p.coluna -= 1;
        }
        if (this.posicao?.linha !== posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha + contador === posicao.linha && this.posicao?.coluna + contador === posicao.coluna && this.podeMover(posicao))
            return true;
        //Sudoeste
        while (this.posicao?.linha < p.linha && this.posicao?.coluna > p.coluna) {
            if (this.tabuleiro.Mostrapeca(p) !== null
                && (this.tabuleiro.Mostrapeca(p)?.Cor === this.Cor || p.linha !== posicao.linha))
                return false;
            contador++;
            p.linha -= 1;
            p.coluna += 1;
        }
        if (this.posicao?.linha !== posicao.linha && this.posicao?.coluna !== posicao.coluna && this.posicao?.linha + contador === posicao.linha && this.posicao?.coluna - contador === posicao.coluna && this.podeMover(posicao))
            return true;
        return false;
    }
    toString() {
        return "Rainha";
    }
}

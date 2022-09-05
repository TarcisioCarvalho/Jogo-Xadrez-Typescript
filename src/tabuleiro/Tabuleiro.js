import { TabuleiroError } from "./Erros/TabuleiroError.js";
export class Tabuleiro {
    constructor(linhas = 8, colunas = 8) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.peca = [];
        this.peca = new Array(8).fill(null).map(() => new Array(8).fill(null));
    }
    Mostrapeca(linha, coluna, posicao) {
        if (posicao !== undefined) {
            return this.peca[posicao.linha][posicao.coluna];
        }
        ;
        if (linha !== undefined && coluna !== undefined) {
            return this.peca[linha][coluna];
        }
        return null;
    }
    existePeca(posicao) {
        this.validaPosicao(posicao);
        return this.Mostrapeca(undefined, undefined, posicao) !== null;
    }
    validaPosicao(posicao) {
        if (!this.posicaoValida(posicao))
            throw new TabuleiroError("Posição Inválida");
    }
    posicaoValida(posicao) {
        if (posicao.linha < 0 || posicao.linha >= this.linhas || posicao.coluna < 0 || posicao.coluna >= this.colunas)
            return false;
        return true;
    }
    colocaPeca(peca, posicao) {
        if (this.existePeca(posicao))
            throw new TabuleiroError("Já existe Peça nessa posição");
        this.peca[posicao.linha][posicao.coluna] = peca;
        peca.posicao = posicao;
    }
}

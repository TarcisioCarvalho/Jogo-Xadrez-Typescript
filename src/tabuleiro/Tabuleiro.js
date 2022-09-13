import { TabuleiroError } from "./Erros/TabuleiroError.js";
export class Tabuleiro {
    constructor(linhas = 8, colunas = 8) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.peca = [];
        this.peca = new Array(8).fill(null).map(() => new Array(8).fill(null));
    }
    Mostrapeca(posicao) {
        if (posicao)
            return this.peca[posicao.linha][posicao.coluna];
        return null;
    }
    existePeca(posicao) {
        this.validaPosicao(posicao);
        return this.Mostrapeca(posicao) !== null;
    }
    validaPosicao(posicao) {
        if (!this.posicaoValida(posicao))
            throw new TabuleiroError("Posição Inválida");
    }
    posicaoValida(posicao) {
        if (posicao.linha < 0 ||
            posicao.linha >= this.linhas ||
            posicao.coluna < 0 ||
            posicao.coluna >= this.colunas)
            return false;
        return true;
    }
    retiraPeca(posicao) {
        if (!this.existePeca(posicao))
            return null;
        const pecaAux = this.Mostrapeca(posicao);
        this.peca[posicao.linha][posicao.coluna] = null;
        return pecaAux;
    }
    colocaPeca(peca, posicao, flag) {
        if (this.existePeca(posicao))
            throw new TabuleiroError("Já existe Peça nessa posição");
        this.peca[posicao.linha][posicao.coluna] = peca;
        peca.posicao = posicao;
        //if(flag)console.log(this.peca);
    }
}

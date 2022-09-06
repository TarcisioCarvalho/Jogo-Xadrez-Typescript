export class Posicao {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
    }
    definirPosicao(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
    }
    toString() {
        return `${this.linha}, ${this.coluna}`;
    }
}

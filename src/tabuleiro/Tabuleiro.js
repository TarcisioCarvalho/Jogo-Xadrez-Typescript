export class Tabuleiro {
    constructor(linhas = 8, colunas = 8) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.peca = [];
        this.peca = new Array(8).fill(null).map(() => new Array(8).fill(null));
    }
    Mostrapeca(linha = 8, coluna = 8) {
        return this.peca[linha][coluna];
    }
    colocaPeca(peca, posicao) {
        this.peca[posicao.linha][posicao.coluna] = peca;
        peca.posicao = posicao;
    }
}

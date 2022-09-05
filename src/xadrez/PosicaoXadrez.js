import { Posicao } from "../tabuleiro/Posicao";
export class PosicaoXadrez {
    constructor(coluna, linha) {
        this.coluna = coluna;
        this.linha = linha;
    }
    toPosicao() {
        return new Posicao(8 - this.linha, 8 - this.coluna);
    }
}

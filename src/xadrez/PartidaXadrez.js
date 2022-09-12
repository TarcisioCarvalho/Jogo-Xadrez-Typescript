import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Posicao } from "../tabuleiro/Posicao.js";
import { Rei } from "./Rei.js";
import { Torre } from "./Torre.js";
export class PartidaXadrez {
    constructor(tabuleiro, pecasEmJogo = [], pecasCapturadas = []) {
        this.tabuleiro = tabuleiro;
        this.pecasEmJogo = pecasEmJogo;
        this.pecasCapturadas = pecasCapturadas;
        this._turno = 1;
        this._jogadorAtual = Cor.Branca;
    }
    get jogadorAtual() {
        return this._jogadorAtual;
    }
    set jogadorAtual(v) {
        this._jogadorAtual = v;
    }
    get turno() {
        return this._turno;
    }
    set turno(v) {
        this._turno = v;
    }
    colocaNovaPeca(peca, posicao, tabuleiro = this.tabuleiro) {
        tabuleiro.colocaPeca(peca, posicao);
        this.pecasEmJogo.push(peca);
    }
    colocaPecas(tabuleiro = this.tabuleiro) {
        this.colocaNovaPeca(new Rei(Cor.Branca, this.tabuleiro), new Posicao(7, 3), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 0), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Branca, this.tabuleiro), new Posicao(7, 7), tabuleiro);
        this.colocaNovaPeca(new Rei(Cor.Preta, this.tabuleiro), new Posicao(0, 3), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 0), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(0, 7), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(5, 4), tabuleiro);
        this.colocaNovaPeca(new Torre(Cor.Preta, this.tabuleiro), new Posicao(6, 4), tabuleiro);
    }
    mudaJogador() {
        this.jogadorAtual = this.jogadorAtual === Cor.Branca ?
            Cor.Preta :
            Cor.Branca;
    }
    rei(cor) {
        return this.pecasEmJogo.find(peca => (peca.toString() === 'Rei' && peca.Cor === cor));
    }
    estaEmXeque() {
        /*  const  pecasCorAdversaria=[];
         const tabuleiroT = new Tabuleiro(8,8); */
        /*   for (let i = 0; i < tabuleiroT.linhas; i++) {
              for (let j = 0; j < tabuleiroT.colunas; j++) {
                  if(tabuleiro.peca[i][j]!==null && tabuleiro.peca[i][j].Cor !== this.jogadorAtual) pecasCorAdversaria.push(tabuleiro.peca[i][j])
                  if(i === posicao.linha && j === posicao.coluna) tabuleiroT.peca[i][j] = peca;
              }
          }  */
        //const pecaRei = this.rei(this.jogadorAtual)
        /*   const pecaTeste = tabuleiro.Mostrapeca(new Posicao(0,0));
          console.log("Posicao do Rei: " , pecaRei?.posicao);
          console.log(pecaTeste?.movimentosPossiveis(pecaRei?.posicao));
          if(pecaTeste?.movimentosPossiveis(pecaRei?.posicao)) return false; */
        //return true;
        /* tabuleiro.colocaPeca(peca,posicao);
        console.log(tabuleiro.Mostrapeca(posicao)); */
        let flag = false;
        const pecaRei = this.rei(this.jogadorAtual);
        console.log("Teste", this.pecasEmJogo, this.jogadorAtual);
        const pecasCorAdversaria = this.pecasEmJogo.filter(pecaAdversaria => pecaAdversaria.Cor !== this.jogadorAtual);
        //console.log(pecasCorAdversaria[1].movimentosPossiveis(new Posicao(0,1)));
        pecasCorAdversaria.forEach(pecaCorAdversaria => {
            if (pecaCorAdversaria.movimentosPossiveis(pecaRei?.posicao)) {
                flag = true;
            }
        });
        return flag;
    }
}

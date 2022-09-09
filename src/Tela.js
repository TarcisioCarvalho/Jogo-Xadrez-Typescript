import { Posicao } from "./tabuleiro/Posicao.js";
import { Cor } from "./tabuleiro/Enums/Cor.js";
export class Tela {
    static imprimirTabuleiro(partidaXadrez) {
        partidaXadrez.colocaPecas();
        const tabuleiro = partidaXadrez.tabuleiro;
        let tabuleiroElement = document.querySelector('#tabuleiro');
        let pecaRetirada;
        function teste(e) {
            const linha = e.target.id[1] === undefined ? undefined : Number(e.target.id[1]);
            const coluna = e.target.id[2] === undefined ? undefined : Number(e.target.id[2]);
            if (tabuleiro.Mostrapeca(new Posicao(linha, coluna)) !== null &&
                tabuleiro.Mostrapeca(new Posicao(linha, coluna))?.Cor === partidaXadrez.jogadorAtual) {
                if (Tela.pecaAMovimentar === null) {
                    Tela.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha, coluna));
                    return;
                }
                if (Tela.pecaAMovimentar !== null && Tela.pecaAMovimentar.Cor === tabuleiro.Mostrapeca(new Posicao(linha, coluna))?.Cor) {
                    tabuleiro.colocaPeca(Tela.pecaAMovimentar, Tela.pecaAMovimentar.posicao);
                    Tela.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha, coluna));
                    return;
                }
            }
            if (Tela.pecaAMovimentar &&
                linha !== undefined &&
                coluna !== undefined &&
                Tela.pecaAMovimentar.Cor === partidaXadrez.jogadorAtual &&
                Tela.pecaAMovimentar.podeMover(new Posicao(linha, coluna)) &&
                Tela.pecaAMovimentar.movimentosPossiveis(new Posicao(linha, coluna))) {
                console.log(Tela.pecaAMovimentar);
                const origem = Tela.pecaAMovimentar.posicao;
                const destino = new Posicao(linha, coluna);
                pecaRetirada = tabuleiro.retiraPeca(new Posicao(linha, coluna));
                if (pecaRetirada !== null)
                    partidaXadrez.pecasCapturadas.push(pecaRetirada);
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                    .filter(pecaEmjogo => pecaEmjogo !== pecaRetirada);
                tabuleiro.colocaPeca(Tela.pecaAMovimentar, new Posicao(linha, coluna));
                //tabuleiro.colocaPeca(Tela.pecaAMovimentar,new Posicao(linha,coluna));
                if (partidaXadrez.estaEmXeque()) {
                    alert("Jogada inválida você não pode se Colocar em Xeque!");
                    if (pecaRetirada !== null)
                        tabuleiro.colocaPeca(pecaRetirada, destino);
                    partidaXadrez.pecasEmJogo.push(pecaRetirada);
                    Tela.pecaAMovimentar = null;
                    return;
                }
                let element = document.querySelector(`#i${origem.linha}${origem.coluna}`);
                element?.removeChild(element.firstChild);
                if (pecaRetirada !== null)
                    partidaXadrez.pecasCapturadas.push(pecaRetirada);
                // Remove Peça da lista de peças em jogo.
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                    .filter(pecaEmjogo => pecaEmjogo !== pecaRetirada);
                if (pecaRetirada !== null) {
                    const divPecasCapturadas = pecaRetirada?.Cor === Cor.Branca ? document.querySelector("#pecasCapturadasBrancas") : document.querySelector("#pecasCapturadasPretas");
                    const imgPecaCapturada = document.createElement('img');
                    imgPecaCapturada.src = pecaRetirada?.imagem;
                    imgPecaCapturada.addEventListener('click', () => '');
                    divPecasCapturadas?.appendChild(imgPecaCapturada);
                }
                //tabuleiro.colocaPeca(Tela.pecaAMovimentar,new Posicao(linha,coluna));
                const img = document.createElement('img');
                img.src = Tela.pecaAMovimentar.imagem;
                //img.addEventListener('click',()=> Tela.removePeca(tabuleiro,linha,coluna));
                element = document.querySelector(`#i${linha}${coluna}`);
                if (element?.firstChild)
                    element?.removeChild(element.firstChild);
                element?.appendChild(img);
                Tela.pecaAMovimentar.incrementaQtdMovimentos();
                partidaXadrez.mudaJogador();
                Tela.pecaAMovimentar = null;
            }
        }
        for (let i = 0; i < tabuleiro.linhas; i++) {
            for (let j = 0; j < tabuleiro.colunas; j++) {
                const quadrado = document.createElement('div');
                quadrado.setAttribute("id", `i${i}${j}`);
                quadrado.setAttribute('class', "quadrado");
                quadrado.addEventListener('click', teste);
                if (tabuleiro.Mostrapeca(new Posicao(i, j)) !== null) {
                    const image = document.createElement('img');
                    image.setAttribute("id", `j${i}${j}`);
                    image.addEventListener('click', () => {
                        teste;
                        //this.removePeca(tabuleiro,i,j);
                    });
                    image.src = tabuleiro.Mostrapeca(new Posicao(i, j))?.imagem;
                    quadrado.appendChild(image);
                }
                tabuleiroElement?.appendChild(quadrado);
                if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
                    quadrado.style.backgroundColor = "black";
                    quadrado.style.border = '1px solid red';
                    quadrado.style.color = "white";
                }
                quadrado.style.border = '1px solid yellow';
            }
        }
    }
    static removePeca(tabuleiro, linha, coluna) {
        Tela.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha, coluna));
        /*   console.log(tabuleiro);
          console.log(this.pecaAMovimentar);
          quadrado.removeChild(image);
          this.divAMovimentar = quadrado;
          this.imageAMovimentar = image; */
    }
}
Tela.pecaAMovimentar = null;

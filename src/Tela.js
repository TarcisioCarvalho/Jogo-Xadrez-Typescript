import { Posicao } from "./tabuleiro/Posicao.js";
import { Cor } from "./tabuleiro/Enums/Cor.js";
export class Tela {
    static imprimirTabuleiro(partidaXadrez) {
        partidaXadrez.colocaPecas();
        const tabuleiro = partidaXadrez.tabuleiro;
        let tabuleiroElement = document.querySelector('#tabuleiro');
        let pecaRetirada;
        function executaJogada(e) {
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
                const origem = Tela.pecaAMovimentar.posicao;
                const destino = new Posicao(linha, coluna);
                pecaRetirada = tabuleiro.retiraPeca(destino);
                if (pecaRetirada !== null)
                    partidaXadrez.pecasCapturadas.push(pecaRetirada);
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                    .filter(pecaEmjogo => pecaEmjogo !== pecaRetirada);
                tabuleiro.colocaPeca(Tela.pecaAMovimentar, new Posicao(linha, coluna));
                //tabuleiro.colocaPeca(Tela.pecaAMovimentar,new Posicao(linha,coluna));
                if (partidaXadrez.meColoqueiEmXeque()) {
                    alert("Jogada inválida você não pode se Colocar em Xeque!");
                    partidaXadrez.desfazJogada(origem, destino, pecaRetirada);
                    Tela.pecaAMovimentar = null;
                    return;
                }
                if (partidaXadrez.coloqueiEmXeque())
                    alert("Cheque!");
                Tela.RemoveImagemTabuleiro(origem);
                /* let element = document.querySelector(`#i${origem!.linha}${origem!.coluna}`);
                element?.removeChild(element.firstChild!); */
                if (pecaRetirada !== null)
                    partidaXadrez.pecasCapturadas.push(pecaRetirada);
                // Remove Peça da lista de peças em jogo.
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                    .filter(pecaEmjogo => pecaEmjogo !== pecaRetirada);
                if (pecaRetirada !== null) {
                    Tela.ColocaPecaCapturada(pecaRetirada);
                    /* const divPecasCapturadas = pecaRetirada?.Cor===Cor.Branca?document.querySelector("#pecasCapturadasBrancas"):document.querySelector("#pecasCapturadasPretas");
                    const imgPecaCapturada = document.createElement('img');
                    imgPecaCapturada.src = pecaRetirada?.imagem;
                    imgPecaCapturada.addEventListener('click',()=> '');
                    divPecasCapturadas?.appendChild(imgPecaCapturada); */
                }
                Tela.ColocaImagemPecaMovimentadaTabuleiro(Tela.pecaAMovimentar);
                /*   const img = document.createElement('img');
                  img.src = Tela.pecaAMovimentar.imagem;
                  element = document.querySelector(`#i${linha}${coluna}`);
                  if(element?.firstChild) element?.removeChild(element.firstChild!);
                  element?.appendChild(img); */
                Tela.pecaAMovimentar.incrementaQtdMovimentos();
                if (partidaXadrez.xequeMate())
                    alert("Xeque Mate");
                partidaXadrez.mudaJogador();
                Tela.pecaAMovimentar = null;
            }
        }
        for (let i = 0; i < tabuleiro.linhas; i++) {
            for (let j = 0; j < tabuleiro.colunas; j++) {
                const quadrado = document.createElement('div');
                quadrado.setAttribute("id", `i${i}${j}`);
                quadrado.setAttribute('class', "quadrado");
                quadrado.addEventListener('click', executaJogada);
                if (tabuleiro.Mostrapeca(new Posicao(i, j)) !== null) {
                    const image = document.createElement('img');
                    image.setAttribute("id", `j${i}${j}`);
                    image.addEventListener('click', () => {
                        executaJogada;
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
    static RemoveImagemTabuleiro(posicao) {
        const element = document.querySelector(`#i${posicao.linha}${posicao.coluna}`);
        element?.removeChild(element.firstChild);
    }
    static ColocaImagemPecaMovimentadaTabuleiro(pecaMovimentada) {
        const img = document.createElement('img');
        img.src = pecaMovimentada.imagem;
        const element = document.querySelector(`#i${pecaMovimentada.posicao.linha}${pecaMovimentada.posicao.coluna}`);
        if (element?.firstChild)
            element?.removeChild(element.firstChild);
        element?.appendChild(img);
    }
    static ColocaPecaCapturada(pecaRetirada) {
        const divPecasCapturadas = pecaRetirada?.Cor === Cor.Branca ? document.querySelector("#pecasCapturadasBrancas") : document.querySelector("#pecasCapturadasPretas");
        const imgPecaCapturada = document.createElement('img');
        imgPecaCapturada.src = pecaRetirada?.imagem;
        imgPecaCapturada.addEventListener('click', () => '');
        divPecasCapturadas?.appendChild(imgPecaCapturada);
    }
}
Tela.pecaAMovimentar = null;

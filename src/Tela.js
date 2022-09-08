import { Posicao } from "./tabuleiro/Posicao.js";
export class Tela {
    static imprimirTabuleiro(partidaXadrez) {
        console.log("Aki");
        partidaXadrez.colocaPecas();
        const tabuleiro = partidaXadrez.tabuleiro;
        let tabuleiroElement = document.querySelector('#tabuleiro');
        function teste(e) {
            const linha = e.target.id[1] === undefined ? undefined : Number(e.target.id[1]);
            const coluna = e.target.id[2] === undefined ? undefined : Number(e.target.id[2]);
            if (Tela.pecaAMovimentar &&
                linha !== undefined &&
                coluna !== undefined &&
                Tela.pecaAMovimentar.podeMover(new Posicao(linha, coluna)) &&
                Tela.pecaAMovimentar.movimentosPossiveis(new Posicao(linha, coluna))) {
                const origem = Tela.pecaAMovimentar.posicao;
                const destino = new Posicao(linha, coluna);
                console.log(destino);
                let element = document.querySelector(`#i${origem.linha}${origem.coluna}`);
                element?.removeChild(element.firstChild);
                tabuleiro.retiraPeca(new Posicao(linha, coluna));
                tabuleiro.colocaPeca(Tela.pecaAMovimentar, new Posicao(linha, coluna));
                const img = document.createElement('img');
                img.src = Tela.pecaAMovimentar.imagem;
                img.addEventListener('click', () => Tela.removePeca(tabuleiro, linha, coluna));
                element = document.querySelector(`#i${linha}${coluna}`);
                if (element?.firstChild)
                    element?.removeChild(element.firstChild);
                element?.appendChild(img);
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
                    image.addEventListener('click', () => {
                        this.removePeca(tabuleiro, i, j);
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
        this.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha, coluna));
        /*   console.log(tabuleiro);
          console.log(this.pecaAMovimentar);
          quadrado.removeChild(image);
          this.divAMovimentar = quadrado;
          this.imageAMovimentar = image; */
    }
}
Tela.pecaAMovimentar = null;

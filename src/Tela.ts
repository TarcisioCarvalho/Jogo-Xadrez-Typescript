import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";
import { Peca } from "./tabuleiro/Peca.js";
import { Posicao } from "./tabuleiro/Posicao.js";
import { PartidaXadrez } from "./xadrez/PartidaXadrez.js";
import { Cor } from "./tabuleiro/Enums/Cor.js";
import { Rainha } from "./xadrez/Rainha.js";

export class Tela{

   static  pecaAMovimentar:Peca|null = null;
   

    static imprimirTabuleiro (partidaXadrez:PartidaXadrez){
    
        partidaXadrez.colocaPecas();
        const tabuleiro:Tabuleiro = partidaXadrez.tabuleiro;
        let tabuleiroElement:HTMLDivElement|null = document.querySelector('#tabuleiro');
        let pecaRetirada:Peca;

        

       function executaJogada(e:any){
            
            
            const linha = e.target.id[1] === undefined?undefined:Number(e.target.id[1]) 
            const coluna= e.target.id[2] === undefined?undefined:Number(e.target.id[2]) 

            if(
                tabuleiro.Mostrapeca(new Posicao(linha,coluna))!== null && 
                tabuleiro.Mostrapeca(new Posicao(linha,coluna))?.Cor === partidaXadrez.jogadorAtual
            
              ){
                if(Tela.pecaAMovimentar === null){
                    Tela.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha,coluna))
                    return;
                }
                if(Tela.pecaAMovimentar!== null && Tela.pecaAMovimentar.Cor === tabuleiro.Mostrapeca(new Posicao(linha,coluna))?.Cor){
                    tabuleiro.colocaPeca(Tela.pecaAMovimentar,Tela.pecaAMovimentar.posicao);
                    Tela.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha,coluna));
                    return;
                }
            }

           

        if   (
             Tela.pecaAMovimentar &&
             linha !== undefined && 
             coluna !== undefined &&
             Tela.pecaAMovimentar.Cor === partidaXadrez.jogadorAtual &&
             Tela.pecaAMovimentar.podeMover(new Posicao(linha,coluna))&&
             Tela.pecaAMovimentar.movimentosPossiveis(new Posicao(linha,coluna))
             ){

           
            const origem = Tela.pecaAMovimentar.posicao;
            const destino = new Posicao(linha,coluna);
            pecaRetirada = tabuleiro.retiraPeca(destino);

            if(pecaRetirada !== null)partidaXadrez.pecasCapturadas.push(pecaRetirada);
            partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
            .filter(pecaEmjogo => pecaEmjogo!==pecaRetirada);

            tabuleiro.colocaPeca(Tela.pecaAMovimentar,new Posicao(linha,coluna));
           //Jogada Especial Promocao
           if(Tela.pecaAMovimentar.toString() === "Peao" &&
                destino.linha === 7 || destino.linha === 0
           ){
                const peao = tabuleiro.retiraPeca(destino);
                const novaRainha = new Rainha(peao?.Cor, tabuleiro);
                tabuleiro.colocaPeca(novaRainha,peao?.posicao);

                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                .filter(pecaEmJogo => pecaEmJogo !== peao);

                partidaXadrez.pecasEmJogo.push(novaRainha);

                Tela.pecaAMovimentar = novaRainha;
           }

            if(partidaXadrez.meColoqueiEmXeque()) {
                alert("Jogada inválida você não pode se Colocar em Xeque!");
                partidaXadrez.desfazJogada(origem!,destino,pecaRetirada);
                Tela.pecaAMovimentar = null;
                return
            }
            if(partidaXadrez.coloqueiEmXeque()) alert("Cheque!");
            
            Tela.RemoveImagemTabuleiro(origem!);
            /* let element = document.querySelector(`#i${origem!.linha}${origem!.coluna}`);
            element?.removeChild(element.firstChild!); */           
           
            if(pecaRetirada !== null)partidaXadrez.pecasCapturadas.push(pecaRetirada);
                       
                // Remove Peça da lista de peças em jogo.
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                .filter(pecaEmjogo => pecaEmjogo!==pecaRetirada);
                 
            if(pecaRetirada!==null){
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

            if(Tela.pecaAMovimentar.toString()==="Rei" && destino.coluna === origem?.coluna + 2 ) 
            Tela.JogadaEspecialRoquePequeno(Tela.pecaAMovimentar,partidaXadrez);

            if(Tela.pecaAMovimentar.toString()==="Rei" && destino.coluna === origem?.coluna - 2 )
            Tela.JogadaEspecialRoqueGrande(Tela.pecaAMovimentar,partidaXadrez);
        
            Tela.pecaAMovimentar.incrementaQtdMovimentos();

            tabuleiro.vuneravelEnPassant = null;
            if(Tela.pecaAMovimentar.toString() === "Peao" && (destino.linha === origem?.linha + 2 || destino.linha === origem?.linha - 2)) 
            tabuleiro.vuneravelEnPassant = Tela.pecaAMovimentar;

            // Remove Peca Variavel En passant
            if(Tela.pecaAMovimentar.toString() === "Peao" &&
                origem?.coluna !== destino.coluna &&
                pecaRetirada === null
            ){
                let posicaoPeao : Posicao | null = null;
                if(Tela.pecaAMovimentar.Cor === Cor.Branca)
                 posicaoPeao = new Posicao(Tela.pecaAMovimentar.posicao?.linha! + 1, Tela.pecaAMovimentar.posicao?.coluna!);

                if(Tela.pecaAMovimentar.Cor === Cor.Preta)
                posicaoPeao = new Posicao(Tela.pecaAMovimentar.posicao?.linha! - 1, Tela.pecaAMovimentar.posicao?.coluna!);

                pecaRetirada =  Tela.retiraPecaTabuleiroJogo(posicaoPeao, partidaXadrez, tabuleiro);

                Tela.RemoveImagemTabuleiro(posicaoPeao);
                Tela.ColocaPecaCapturada(pecaRetirada);
            }

            if(partidaXadrez.xequeMate()) alert("Xeque Mate");
            partidaXadrez.mudaJogador();

            Tela.pecaAMovimentar = null;
 
        }
        
       }
        for (let i = 0; i < tabuleiro.linhas; i++) {
            for (let j = 0; j < tabuleiro.colunas; j++) {
               
            const quadrado =  document.createElement('div');

            quadrado.setAttribute("id",`i${i}${j}`);
            quadrado.setAttribute('class',"quadrado");
            quadrado.addEventListener('click', executaJogada);

            if (tabuleiro.Mostrapeca(new Posicao(i,j))!== null) {
                
                const image = document.createElement('img');
                image.setAttribute("id",`j${i}${j}`);
                image.addEventListener('click', ()=> {executaJogada
                    //this.removePeca(tabuleiro,i,j);
                });
                image.src = tabuleiro.Mostrapeca(new Posicao(i,j))?.imagem;
                quadrado.appendChild(image);
            }

            tabuleiroElement?.appendChild(quadrado);

                if ((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)) {
                    quadrado.style.backgroundColor="black";
                    quadrado.style.border='1px solid red';
                    quadrado.style.color="white";
                }
                    quadrado.style.border = '1px solid yellow';
                
            }
            
        }
       
    }

    static JogadaEspecialRoqueGrande(rei:Peca,partida:PartidaXadrez){
        const posicaoOrigemTorre = new Posicao(rei.posicao?.linha,rei.posicao?.coluna - 2);
        const torre = partida.tabuleiro.retiraPeca(posicaoOrigemTorre);
        Tela.RemoveImagemTabuleiro(posicaoOrigemTorre);
        const posicaoDestinoTorre = new Posicao(rei.posicao?.linha,rei.posicao?.coluna + 1);
        partida.tabuleiro.colocaPeca(torre,posicaoDestinoTorre);
        Tela.ColocaImagemPecaMovimentadaTabuleiro(torre);
    }

    static JogadaEspecialRoquePequeno(rei:Peca,partida:PartidaXadrez){
        const posicaoOrigemTorre = new Posicao(rei.posicao?.linha,rei.posicao?.coluna + 1);
        const torre = partida.tabuleiro.retiraPeca(posicaoOrigemTorre);
        Tela.RemoveImagemTabuleiro(posicaoOrigemTorre);
        const posicaoDestinoTorre = new Posicao(rei.posicao?.linha,rei.posicao?.coluna - 1);
        partida.tabuleiro.colocaPeca(torre,posicaoDestinoTorre);
        Tela.ColocaImagemPecaMovimentadaTabuleiro(torre);
    }

    static RemoveImagemTabuleiro(posicao:Posicao):void{
        const element = document.querySelector(`#i${posicao!.linha}${posicao!.coluna}`);
        element?.removeChild(element.firstChild!);
    }

    static ColocaImagemPecaMovimentadaTabuleiro(pecaMovimentada:Peca){
        const img = document.createElement('img');
        img.src = pecaMovimentada.imagem;
        const element = document.querySelector(`#i${pecaMovimentada.posicao.linha}${pecaMovimentada.posicao.coluna}`);
        if(element?.firstChild) element?.removeChild(element.firstChild!);
        element?.appendChild(img);
    }

    static ColocaPecaCapturada(pecaRetirada:Peca){
        const divPecasCapturadas = pecaRetirada?.Cor===Cor.Branca?document.querySelector("#pecasCapturadasBrancas"):document.querySelector("#pecasCapturadasPretas");
        const imgPecaCapturada = document.createElement('img');
        imgPecaCapturada.src = pecaRetirada?.imagem;
        imgPecaCapturada.addEventListener('click',()=> '');
        divPecasCapturadas?.appendChild(imgPecaCapturada);
    }

    static retiraPecaTabuleiroJogo(posicaoPeao:Posicao, partidaXadrez:PartidaXadrez, tabuleiro:Tabuleiro):Peca | null{
          const pecaRetirada = tabuleiro.retiraPeca(posicaoPeao);
                partidaXadrez.pecasCapturadas.push(pecaRetirada!);
                partidaXadrez.pecasEmJogo = partidaXadrez.pecasEmJogo
                .filter(pecaEmJogo => pecaEmJogo !== pecaRetirada);

                return pecaRetirada;
    }
}




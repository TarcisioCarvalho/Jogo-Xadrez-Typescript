import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";
import { Peca } from "./tabuleiro/Peca.js";
import { Posicao } from "./tabuleiro/Posicao.js";

export class Tela{

   static  pecaAMovimentar:Peca|null = null;
   static imageAMovimentar:null|HTMLImageElement = null;
   static divAMovimentar:null|HTMLDivElement = null;

    static imprimirTabuleiro (tabuleiro:Tabuleiro){

        let tabuleiroElement:HTMLDivElement|null = document.querySelector('#tabuleiro');

       function teste(e){
       
            const linha = e.target.id[1];
            const coluna = e.target.id[2];
       
        console.log("Aki é o teste da peça a movimentar"+ Tela.pecaAMovimentar);

        if(Tela.pecaAMovimentar && linha !==undefined && coluna !== undefined){
            const origem = Tela.pecaAMovimentar.posicao;
            
            console.log(origem);
            const destino = new Posicao(linha,coluna);
            console.log(destino);
            let element = document.querySelector(`#i${origem.linha}${origem.coluna}`);
            element?.removeChild(element.firstChild!);
            console.log(element?.firstChild);
            console.log(element);
            tabuleiro.colocaPeca(Tela.pecaAMovimentar,new Posicao(linha,coluna));
            const img = document.createElement('img');
            img.src = Tela.pecaAMovimentar.imagem;
            img.addEventListener('click',()=> Tela.removePeca(tabuleiro,linha,coluna));
            element = document.querySelector(`#i${linha}${coluna}`);
            console.log("Estou olhando aki"+element);
            element?.appendChild(img);
            console.log(tabuleiro);
            
            Tela.pecaAMovimentar = null;
            
        }
       }
        for (let i = 0; i < tabuleiro.linhas; i++) {
            for (let j = 0; j < tabuleiro.colunas; j++) {
               
            const quadrado =  document.createElement('div');

            quadrado.setAttribute("id",`i${i}${j}`);
            quadrado.setAttribute('class',"quadrado");
            quadrado.addEventListener('click',teste);

            if (tabuleiro.Mostrapeca(i,j)!== null) {
                console.log("entrei aki")
                const image = document.createElement('img');
                image.addEventListener('click', ()=> this.removePeca(tabuleiro,i,j));
                image.src = tabuleiro.Mostrapeca(i,j, undefined)?.imagem;
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

    static removePeca(tabuleiro:Tabuleiro,linha:number,coluna:number){
       
        console.log('Removi a peça.')
        this.pecaAMovimentar = tabuleiro.retiraPeca(new Posicao(linha,coluna));
        
      /*   console.log(tabuleiro);
        console.log(this.pecaAMovimentar);
        quadrado.removeChild(image);
        this.divAMovimentar = quadrado;
        this.imageAMovimentar = image; */
        
    }

   

 

    static moverPeca(){

        
    }
}




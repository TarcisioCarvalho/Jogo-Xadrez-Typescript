import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";
import { Peca } from "./tabuleiro/Peca.js";
import { Posicao } from "./tabuleiro/Posicao.js";

export class Tela{
    static imprimirTabuleiro (tabuleiro:Tabuleiro){
        const tabuleiroElement = document.querySelector('#tabuleiro');
        for (let i = 0; i < tabuleiro.linhas; i++) {
            for (let j = 0; j < tabuleiro.colunas; j++) {
               
            const quadrado =  document.createElement('div');

            quadrado.setAttribute("id",`i${i}${j}`);
            quadrado.setAttribute('class',"quadrado");
            if (tabuleiro.Mostrapeca(i,j)!== null) {
               
                const image = document.createElement('img');
                image.addEventListener('click',()=> alert(tabuleiro.Mostrapeca(i,j)?.toString()));
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
}




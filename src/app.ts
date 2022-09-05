
import { Posicao } from "./tabuleiro/Posicao.js";
import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";

const tabuleiroTeste = new Tabuleiro;

import { Tela } from "./Tela.js";
import { Rei } from "./xadrez/Rei.js";
import { Torre } from "./xadrez/Torre.js";

tabuleiroTeste.colocaPeca(new Rei,new Posicao(0,0));
tabuleiroTeste.colocaPeca(new Rei,new Posicao(0,1));
tabuleiroTeste.colocaPeca(new Torre,new Posicao(5,5));
console.log(tabuleiroTeste.peca);

Tela.imprimirTabuleiro(tabuleiroTeste); 








 

import { Posicao } from "./tabuleiro/Posicao.js";
import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";

const tabuleiroTeste = new Tabuleiro(8,8);

import { Tela } from "./Tela.js";
import { Rei } from "./xadrez/Rei.js";
import { Torre } from "./xadrez/Torre.js";

tabuleiroTeste.colocaPeca(new Rei,new Posicao(0,0));
const posicao = new Posicao(0,0);
console.log(posicao.toString());
tabuleiroTeste.colocaPeca(new Torre,new Posicao(1,0));
console.log(tabuleiroTeste.peca);

Tela.imprimirTabuleiro(tabuleiroTeste); 








 
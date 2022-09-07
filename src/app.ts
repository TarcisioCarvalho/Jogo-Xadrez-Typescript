
import { Cor } from "./tabuleiro/Enums/Cor.js";
import { Posicao } from "./tabuleiro/Posicao.js";
import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";

const tabuleiroTeste = new Tabuleiro(8,8);

import { Tela } from "./Tela.js";
import { Rei } from "./xadrez/Rei.js";
import { Torre } from "./xadrez/Torre.js";

tabuleiroTeste.colocaPeca(new Rei(Cor.Preta,tabuleiroTeste),new Posicao(0,0));
const posicao = new Posicao(0,0);

tabuleiroTeste.colocaPeca(new Torre(Cor.Branca,tabuleiroTeste),new Posicao(1,0));
tabuleiroTeste.colocaPeca(new Torre(Cor.Branca,tabuleiroTeste),new Posicao(1,1));
tabuleiroTeste.colocaPeca(new Torre(Cor.Preta,tabuleiroTeste),new Posicao(2,0));
tabuleiroTeste.colocaPeca(new Torre(Cor.Branca,tabuleiroTeste),new Posicao(3,3));
tabuleiroTeste.colocaPeca(new Torre(Cor.Branca,tabuleiroTeste),new Posicao(4,0));
tabuleiroTeste.colocaPeca(new Torre(Cor.Branca,tabuleiroTeste),new Posicao(5,0));

Tela.imprimirTabuleiro(tabuleiroTeste); 








 
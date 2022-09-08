
import { Cor } from "./tabuleiro/Enums/Cor.js";
import { Posicao } from "./tabuleiro/Posicao.js";
import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";
import { Tela } from "./Tela.js";
import { PartidaXadrez } from "./xadrez/PartidaXadrez.js";
import { Rei } from "./xadrez/Rei.js";
import { Torre } from "./xadrez/Torre.js";

const tabuleiro = new Tabuleiro(8,8);
const partidaXadrez = new PartidaXadrez(tabuleiro); 
Tela.imprimirTabuleiro(partidaXadrez);














 
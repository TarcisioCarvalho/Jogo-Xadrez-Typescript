import { Tabuleiro } from "./tabuleiro/Tabuleiro.js";
import { Tela } from "./Tela.js";
import { PartidaXadrez } from "./xadrez/PartidaXadrez.js";
const tabuleiro = new Tabuleiro(8, 8);
const partidaXadrez = new PartidaXadrez(tabuleiro);
Tela.imprimirTabuleiro(partidaXadrez);

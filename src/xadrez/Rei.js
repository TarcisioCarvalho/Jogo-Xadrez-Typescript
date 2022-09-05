import { Peca } from "../tabuleiro/Peca.js";
export class Rei extends Peca {
    constructor() {
        super(...arguments);
        this.imagem = 'https://cdn.w600.comps.canstockphoto.com.br/rei-smiley-drooling-personagem-ilustra%C3%A7%C3%A3o_csp33930527.jpg';
    }
    toString() {
        return "R";
    }
}

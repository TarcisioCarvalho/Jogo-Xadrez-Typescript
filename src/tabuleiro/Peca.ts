import { Posicao } from "./Posicao.js";

    export abstract class Peca{
        public posicao:Posicao|null = null;
        public imagem:string|null|undefined;

        constructor(public nome:string | null="Peça"){}

        abstract toString():string;
    }

import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";
import { Tabuleiro } from "../tabuleiro/Tabuleiro.js";
import { Rei } from "./Rei.js";
import { Torre } from "./Torre.js";

export class PartidaXadrez{
    
    private _turno : number;
    private _jogadorAtual : Cor;



    public get jogadorAtual() : Cor {
        return this._jogadorAtual;
    }
    public set jogadorAtual(v : Cor) {
        this._jogadorAtual = v;
    }
    
    public get turno() : number {
        return this._turno;
    }
    private set turno(v : number) {
        this._turno = v;
    }
    

    constructor
        (
        public tabuleiro:Tabuleiro,
        public pecasEmJogo:Peca[]=[],
        public pecasCapturadas:Peca[]=[]
        )
        {
        this._turno = 1;
        this._jogadorAtual = Cor.Branca;
        }

        public colocaNovaPeca(peca:Peca,posicao:Posicao,tabuleiro:Tabuleiro = this.tabuleiro):void{
            tabuleiro.colocaPeca(peca,posicao);
            this.pecasEmJogo.push(peca);
        }

        

        public  colocaPecas(tabuleiro:Tabuleiro= this.tabuleiro):void{
            
            this.colocaNovaPeca(new Rei(Cor.Branca,this.tabuleiro),new Posicao(7,3),tabuleiro);
            this.colocaNovaPeca(new Torre(Cor.Branca,this.tabuleiro),new Posicao(7,0),tabuleiro);
            this.colocaNovaPeca(new Torre(Cor.Branca,this.tabuleiro),new Posicao(7,7),tabuleiro);
            this.colocaNovaPeca(new Rei(Cor.Preta,this.tabuleiro),new Posicao(0,3),tabuleiro);
            this.colocaNovaPeca(new Torre(Cor.Preta,this.tabuleiro),new Posicao(0,0),tabuleiro);
            this.colocaNovaPeca(new Torre(Cor.Preta,this.tabuleiro),new Posicao(0,7),tabuleiro);
        }

        public mudaJogador():void{
            this.jogadorAtual = this.jogadorAtual === Cor.Branca?
            Cor.Preta:
            Cor.Branca;
        }

        public rei(cor:Cor):Peca|undefined{
           return this.pecasEmJogo.find(peca => (peca.toString() === 'Rei' && peca.Cor === cor))
        }

        public estaEmXeque():boolean{
            /*  const  pecasCorAdversaria=[];
             const tabuleiroT = new Tabuleiro(8,8); */
             
          /*   for (let i = 0; i < tabuleiroT.linhas; i++) {
                for (let j = 0; j < tabuleiroT.colunas; j++) {
                    if(tabuleiro.peca[i][j]!==null && tabuleiro.peca[i][j].Cor !== this.jogadorAtual) pecasCorAdversaria.push(tabuleiro.peca[i][j])
                    if(i === posicao.linha && j === posicao.coluna) tabuleiroT.peca[i][j] = peca;
                }
            }  */
            //const pecaRei = this.rei(this.jogadorAtual)
    
          /*   const pecaTeste = tabuleiro.Mostrapeca(new Posicao(0,0));
            console.log("Posicao do Rei: " , pecaRei?.posicao);
            console.log(pecaTeste?.movimentosPossiveis(pecaRei?.posicao));
            if(pecaTeste?.movimentosPossiveis(pecaRei?.posicao)) return false; */
            //return true;
            
            /* tabuleiro.colocaPeca(peca,posicao);
            console.log(tabuleiro.Mostrapeca(posicao)); */

            let flag:boolean = false;
            const pecaRei = this.rei(this.jogadorAtual);
            const pecasCorAdversaria = this.pecasEmJogo.filter(pecaAdversaria=> pecaAdversaria.Cor!==this.jogadorAtual);
            
            //console.log(pecasCorAdversaria[1].movimentosPossiveis(new Posicao(0,1)));
            pecasCorAdversaria.forEach(pecaCorAdversaria => {
                
                if(pecaCorAdversaria.movimentosPossiveis(pecaRei?.posicao){
                    flag= true;
                }
            })
            return flag;

        
        }

}
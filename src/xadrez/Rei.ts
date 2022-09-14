import { Cor } from "../tabuleiro/Enums/Cor.js";
import { Peca } from "../tabuleiro/Peca.js";
import { Posicao } from "../tabuleiro/Posicao.js";

export class Rei extends Peca{
   
    public imagem: string | null | undefined = this.Cor === Cor.Branca?
     'https://cdn.w600.comps.canstockphoto.com.br/rei-smiley-drooling-personagem-ilustra%C3%A7%C3%A3o_csp33930527.jpg'
     :'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX///8AAAD/AAD0AAD8/Pz39/eBgYHCwsLKysrz8/OhoaHt7e2+vr7Gxsanp6deXl6Ojo6ysrL5AABtbW1TU1Pe3t7l5eXT09O2trZZWVl3d3fj4+Obm5tmZmZQUFAbGxtLAAA5OTlERESTk5MxMTF+fn4lJSVJSUl0AACTAAAgICATExMLCwuIiIhFRUXoAACiAADSAABmAgK3AABZAAA2AACCAAByAQErAAAfAACvAADFAwNKAwOLAADQAAC4ERF+FBRTERHcv+DeAAANq0lEQVR4nO1da2OiPBY2ragIaq0XrPVSW6szXqbtXDr7zsz77u7//1PLyY0EAqIYQl2eTy0BzJOcnEtyEiqVEiVKlChRomhwTFdAN/Zt0zXQjMEODU3XQS96CPVN10ErXOTDNV0LnQCCqGe6FhoxxgxRy3Q99GFFGM4s0xXRhSdEcbE2cc8YXqzBuHyGlTkheMFuzeDCFU2FmouG6VpowGC/eNx4dgUPxTFcmaweF2vbcLXOB2olVveVyg1RM318YT4wXbNzoc90aMXx/3yqDJf0/96ljEhguKhVBr0VprZGnW6l3YGLl8IQQiY85lzSdU/46vMl6ZwxCyfGguM93Dwbq1A8rIy6YQBiyv45zfBb99mqcAD2bJwt9Nln9WicBTp8UxZMEJpkeb6GUBYxsB+1ByYjX8o6WV6QieFgl0PotQB1n+FHFlkYAsHa6Y+nwwS0YYZKrrqnP4s1cYbnUwJ+ZXH648ub05+dgqenfZKnStyvk5FBSkEHEL9dL1qZGN4fEvGE0lFOk631ZIbWY6JF9q1FYrk9jS9rbH0hTa7cWWB3EhlWUaIv5lv8fVJ5b5XQibVM4yM99vR3Gg08JOty6Sqxk+y75Er6rxzJV1p4jrULvEd5zWFZGz86qDahrrN+f4aaYiFED1/in8XBRXzINPSt7VKK/Bdo3e+v/YemntX2hTSfmdYFC2ixQHmeUOTM4Ppd7KMg4Sh+qOG3iia9e4eb44b94ijmwTOD/t5MMc3CZrVjhInIdZzRrk5JsWKgtlDik+eGhVQD0Ee1xtp621OK05aUqkP7/Zo9rLAIHi75Us1Y9ZSwUYzpxY4xQU9VFy5sT6rXbvjD0+jD5Dcz+fzHAMuMchVwQFeXlFXxOAVlfFCd0cZRiaKFZ7NymyxvxOsLaxnLAGI7BqUuqpMy9SzqAUfj3BjH9WGS30q6d1mLlWKsiBdqe4ClNIPTfizG6nGIAY2t8EuYFqIWQ+lf3sQLoh0nGZpgzxHaeeoy0PkKr4bOCvvEHPKXwrT5DFcxv4gfynNRbp5gm2oqcerS8Qd2oolilPE+PvBY5KlnAE6C0NQURdQTmOF/qgvyX9i7A10bIxhtuL+pLtMDK8YiAoBhSIQ7VIVSMaNKMyyos1iG4K8qfSiNwA6Wsjr2OmJLvlBG3ONsKCh6TBMpgLVUbuaegKxAqCi2SU03gndJ3TxhdN7hC0Ik6dAlDaU1vI/nrg91YVxJqCKGdeB9Yt2yFAanE6Lc4E8pfIFGQu9qRC3mZ7cowKxOvXMsgVLGHp4YpO7pYCQ8g8ZhX8DqhDs8H1BhDPvQEyRjuh44zjNx5YRghHTLznWcdn+6kx8JLbk5dDk1//ViJlVSk3dQAr444YfVkFQsk18Dy8WsPvPAgeGr1zHgazrPyfcJUX6TXTOQg8NjoV2DNq+3U1c4AO3vxqEbuboZ80vReFs7HLFzwJQ3ozUNgyibav/gjRs86p6CeEuhtbXDksbcHK0OE6Sy1k1zZwhrAwy573UMYDYwRV9HYSRfU4zZU2NMfMyjYYIgTiI5HoOwxUz3lBmGT4drdi7EBFXakRvBqancqfHhup0HyvnVPGDnRHBpLE1zmBPD+JUe7WjnwzBTjlI2nOKdnABzBCvDU4z+8chpxUmJXLSp0W1SuegaU+aeIAeCBvUM4E4/Q2PmnsA5XMOMWBne6HavneGjWYI5GH3j6e7ajb5pggemSLMjIZMvL2jWpgXYFT3Qy7AI22q0Eswx/SIep8wqpkZOiWzJ8A7X82RkSJk/I5z14ZqeChOT+QpoNPrFOAfF1mgvtmYjJwqtflshdKlOgigpdT8vjA5XMwvMH2Zj6Z6MMt6J2qMn0ybRmupmuDHciTlMthmeidLehb6Ymj3NRj9Bw/Oluayv5bQVSI2TlvKPxsWvW5hk6B6u3Tlg0F7ktH5oMIbKiWHOGd4lw5JhybBkeEkMudNbCIaLi2eoI8jg228MZn3lxDDXbXkyAr9URxjFp/FMxhZ8ulsDw2e+5mPy7EEeH2pgOCoEQxYfNjWMw2IxrGthaNMsiCLE+C1++sj54PLp5iIwrAu7QC+S4drRw7BpniHVpU86VvPhXIkF/LE2yZBO6t+Q1KgfV7cvL5/e339+P4nS19crgusfjCFe2CpCBq1HtnA/XDG8vb3/6zh6f7298KevXhnDbkEYbithhrgnPv+Vmt+vF/HJF3ytyd5fAIZ1+ofMELryaxp6P7/dyo8RhtjQF4ShHcfQ5/j5EL9PuPuur6MM4f2+Ans0myQMKhQys8YxDH38SujIX0S53PqIMpyS9xuMnQCgTCF9cMYZ3l5TCCPyp4rkw6vUcVGGcBqPNTW9Qjokh7iQjaESw5C0fvv9R+L3/U3NDuOd3AOHh9yYTqlx5juwx/tDDIOeIVAS45L6m9wEmSbVmUl7D+jCMKFZtJhhVEgp/hYZfgtxu6UNQ0h+o3eB/BtPqPGYIvXxJ4nglezoCAXXMgSGRj1SEeyYi0+kN3B/RAh+kwii9ziC0I38XuMdiBHkJl4LtQ4T/B1Wpf9Q+QwTxILK+/uL+U9D2cJ5H5Lg4c7kuuMtTBD9uFYTxAx/8tsM73oKHdgSHXsM/44Q9PEW34eCVsrheOskNKJVVuE/KoIIvUYowhj2Gd6KWsmsPQzlYnz9rST4X1Y+9/Bxzjwx/F15+9XfD9JbTXrejS0K4/U1XN9fQWEHjgtpCSmpfyJ3/xN1Y02ms6tX1368vgTh3psocC3fR7n3HSEhJ/X7S+Bzv718f4i8DRm1ivHrh58oJGeU79KS8oofPlPExiCFZKhEkPmzOXyzAINz3sclCAvHdR23udak73bM5kNJ6x/VNgWYEU4F6UHriLYx+rnE9DPd/fBgSn9CkdmZqLQ7ghSnkaU98yvxaxH6kVZlKNILUw7Freno4j7VSXQqZTFI96T5PZbpxpPqHKRUef7mCaY0+yqGaZLEx8X4QmIKjqqKHmZYgM34FJY1vkvWqiqjnWRMl/27/qAY/RfAawBarQaKxlRo0m6KI6rabLfb0fNct6jdaOG3FP0zs6dtYF8XYsNoSgwV3XgIxo9pOQ7O7GiGhdjUfASO3i9kMIn0NFiX3oX8S/EXzPDYTV8fj+GxZ2QZ37N9NI48mcfwav0pOJKh4dX6U1AyLBkWHyXDj89wcuBzHiE8m55SOwG2N083m4bm8/bHs/cU9fbhr3V0P6CASrC8XlwkNR/3mlbRJmNOQ6vlhidvtuim8WFFMw4OTD81m23XdT9eIFGiRIkSJQ6hKJm6JUqcgLa5kKfqjbrYNepm8v2EdIn5bB/5BOFAzAQJbl322Ee3+fKMK+ynrUQLn4NCvtBKVvm39Ga2G55OOnrstmcvW570sN5mfjJGKDupJyY6terkV3Ha94Z0rlfHYUW77lQGLXhHzQ16PVo4svnVbstz8UYcutBddetLuJecMAjNNWuOuvhzr1nzbaApMVmccyGdwQHtKi7sOqQNqngDDdO/iGVq+6W78AmI6kLOy96KrdrlK4yPvkhR2Rxn37HwjFhH2Usk5w5AGy+F/y1WH2hitp7LGrk6R8uI1UH0m6NyIeKffMASxMZZnS3AdXyZ4ndPM591VuMMyT5RYTBioRTiIM4QNrRtZBLVJVpEzaq6EPFvrZLEMFrEGI6kX61mPsJVYIiX5ze8xEVPa0lGOEPcFFJ1rZVyYYIUVkOFIsP9kn+DnTFEcuZ3LesXMESGeE2QN98COdCcwSyE1IesZXF1/QGlTKHE8ugXNsNXOcMbm0s8ZQi/KZ6G6WRNzpQYgg5h80YDaEkkTnRyhj1BQcA4tKVP/Ia4RAulPsRn4OCPXFCGkJh61jNbJYbQfkwse/C7e7HUIrrVGgtdCNXt7OL0HRRGlaHMENcAbAxlKIyACs69yZp9IzGEhNk+p1MhBoLrHmA46+GdBkGliSGN+ditujDEEIwDqGzC0BIY8mOWMk37xDGckMFzJ1SQJyfUBGfO/xc4Ry1FfGGYoUWajDC0xT608LarbrbYJyKlY1aNui8fHvgB7MPcZBwuAleLVvcGhtJKVQ11YZgh3TAuSGkglTco82YFiSG8j+g98WxW9kUmwtCRtTmuLvgGG0VFcCEYvbkVvioyxLcMG4ShpM/xmzOGrxFrQXpsgXo3gKdF8BNUl0JHB94wqS5opG2UorowyhB8x7lLGNak10/O24dwjhDxDQf8YiOwDMxagLHgn/hBxGvrycIlc4HCnR2+KjKEtt0ShrBqN9fFcMcFpBc044YcDSAwrGwFNpQhiYrC4STjIheqGOKMeeLTdJDgjp+BYeB5WyCQxL5Xhf5oc9qcITQzc8kZQ3LUTMhUcy5SociQJ2TCwL/jP8Nl5AwMO5Shhf186l7VBHc3cNEc3gLNwKoEmggaCLkVEYFqFguDq3thj2yNx264P2nYllWXDl0SAW8WOARek0CmDk5Lk1Sn6uL4/G5kt1xYKty4LvQu3iX65HouHn9NP+61XLLp8LHNml8qXLNCr47D2rY7tNyRPyxGPGZ+5NGpBVK9nLjuBN65qWSAMIuxuZswu0ev4L/5WXvB/iBoBmr8F+yaK3xEYUdfI8xiBPtSVnytccQSAViLWIIR8vhOhmkBPsx2Ngwl52zgdrv1+7h7S5QoUaJEiRIlSpQoUaJEif8//A+hXMmZ7uVF9AAAAABJRU5ErkJggg==';

     movimentosPossiveis(posicao:Posicao): boolean {
        //Cima
        if((this.posicao?.coluna === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
        //NE
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Direita
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)) return true;
        //SE
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Baixo
        if((this.posicao?.coluna === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //SO
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha) && this.podeMover(posicao)) return true;
        //Esquerda
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha === posicao.linha) && this.podeMover(posicao)) return true;
        //NO
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha) && this.podeMover(posicao)) return true;
      /*   if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha === posicao.linha)) return true;
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha-1 === posicao.linha)) return true;
        if((this.posicao?.coluna-1 === posicao.coluna) && (this.posicao?.linha === posicao.linha)) return true; */
       /*  if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true;
        if((this.posicao?.coluna+1 === posicao.coluna) && (this.posicao?.linha+1 === posicao.linha)) return true; */
      /*  if((Number(this.posicao?.coluna!)+1)===Number(posicao.coluna)) return true;
       if((Number(this.posicao?.coluna!)-1)===Number(posicao.coluna)) return true;
       if((Number(this.posicao?.linha!)+1) ===Number(posicao.linha)) return true;
       if((Number(this.posicao?.linha!)-1) ===Number(posicao.linha)) return true; */

       return false

    }

    toString():string{
        return "Rei";
    }
}
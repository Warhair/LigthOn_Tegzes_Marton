import Lampa from "./Lampa.js";

class JAtekTer{
    #db
    #allapotLista = []
    #meret
    #lepes
    constructor(){
    this.#allapotLista=[0,1,0,1,0,1,0,1,0];
    this.#db = 0;
    const SZULOELEM = $("article");
    console.log(this.#allapotLista)
    for (let index = 0; index < this.#allapotLista.length; index++) {
        const tl = new Lampa(this.#allapotLista[index],this.#db, SZULOELEM);
        console.log(index)

    }
    }
    setAllapotLista(){
        const hany = 0
        while(hany < 2){
        for (let index = 0; index < this.#allapotLista.length; index++) {
            
            this.#allapotLista[index] = getRandomInt(2);
            if(this.#allapotLista[index] == 1){
                hany++;
            }
        }
        console.log(hany)
    }
        for (let index = 0; index < this.#allapotLista.length; index++) {
            if(this.#allapotLista[index] == 1){
                this.#db++;
            }
        }
    }
    szomszedokKeresese(id){

    }
    init(){

    }
    ellenorzes(){

    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
}
    
export default JAtekTer;

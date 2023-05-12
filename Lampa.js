class Lampa{
    #alllapot
    #id
    #divelem
    constructor(id, allapot, szuloElem){
        this.#id = id;
        this.#alllapot = allapot;
        this.#divelem = szuloElem;
        szuloElem.append(`<div class ="card col-lg-4"><button" id=${this.#id}>${this.#id}</button></div>`);
        this.buttonElem = szuloElem.children("button:last-child");
        this.buttonElem.on("click", () => {
            this.setAllapot();
            this.esemenyTrigger()
           
        })
        console.log(this.buttonElem)
    }
    setAllapot(){
        this.szinBealit();
    }
    szinBealit(){
        if(this.#id == 1){
        }
    }
    kattintasTigger(){
        const esemeny = new CustomEvent("elemKattintas", { detail: this.#id});
        window.dispatchEvent(esemeny);

    }
    
}

export default Lampa;
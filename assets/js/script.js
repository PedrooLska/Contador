class Contador {
    constructor () {

        this.count= 0;
    }


    addCount() {
        this.showResult(++this.count);
    }

    decrementCount() {
        this.showResult(--this.count);
    }


    showResult(count) {
        let result = document.querySelector('.result');

        result.innerHTML = count;
    }

}


const newContador = new Contador();
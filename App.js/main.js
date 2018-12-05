export class Main{
    constructor(){
        /* buttons********** */
        this.btnCompras = document.querySelector('.btn-compras')
        console.log(this.btnCompras)
        this.btnFacturas = document.querySelector('.btn-facturas')
        this.btnAlquiler = document.querySelector('.btn-alquiler')
        this.btnSumarTotal = document.querySelector('#btn-sumar-total')

        this.btnAddCompras = document.querySelector('#btn-add-compras')
        this.btnAddFacturas = document.querySelector('#btn-add-facturas')
        this.btnAddAlquiler = document.querySelector('#btn-add-alquiler')
        /* sections********* */
        this.hidden1 = document.querySelector('.hidden-1')
        this.hidden2 = document.querySelector('.hidden-2')
        this.hidden3 = document.querySelector('.hidden-3')
        /* inputs*********** */
        this.inputProductoCompras = document.querySelector('#input-producto-compras')
        this.inputCantidadCompras = document.querySelector('#input-cantidad-compras')
        this.inputProductoFacturas = document.querySelector('#input-producto-facturas')
        this.inputCantidadCompras = document.querySelector('#input-cantidad-facturas')
        this.inputProductoAlquiler = document.querySelector('#input-producto-alquiler')
        this.inputCantidadAlquiler = document.querySelector('#input-cantidad-alquiler')
        this.inputSumar = document.querySelector('#input-sumar')
        /* outputs********* */
        this.outputCompras = document.querySelector('.output-container-1')
        this.outputFacturas = document.querySelector('.output-container-2')
        this.outputAlquiler = document.querySelector('.output-container-3')
        /* section handlers */
        this.btnCompras.addEventListener('click', this.mostrarCompras.bind(this))
        this.btnFacturas.addEventListener('click', this.mostrarfacturas.bind(this))
        this.btnAlquiler.addEventListener('click', this.mostrarAlquiler.bind(this))
        /* input handlers */
        this.btnAddCompras.addEventListener('click', this.enviarDataCompras.bind(this))
        //declaramos una variable y le asignamos el valor que se recoge de parametro
    }

    mostrarCompras(){
       this.hidden1.classList.toggle('hidden-1')
       this.hidden2.classList.add('hidden-2')
       this.hidden3.classList.add('hidden-3')
    }
    mostrarfacturas(){
        this.hidden2.classList.toggle('hidden-2')
        this.hidden1.classList.add('hidden-1')
        this.hidden3.classList.add('hidden-3') 
    }
    mostrarAlquiler(){
        this.hidden3.classList.toggle('hidden-3')
        this.hidden1.classList.add('hidden-1')
        this.hidden2.classList.add('hidden-2')
    }
    enviarDataCompras(){
        let valorProductos = this.inputProductoCompras.value
        valorProductos = ['']
        for (let index = 0; index < valorProductos.length; index++) {
            const element = valorProductos[index];
            if(valorProductos){
                this.outputCompras.innerHTML += `hola ${valorProductos['']}`
            }
            else{
                element == ['']
                this.outputCompras.innerHTML =  `<p> hey ${element}</p>`
            }
            console.log(valorProductos)
        }

        /* if(valorProductos == ''){
            this.outputCompras.innerHTML = `<p>Por favor introduce un producto</p>`
        }
        else{
            valorProductos
            this.outputCompras.innerHTML =  `<p> ${this.inputProductoCompras.value}</p>`
        } */
    }
}
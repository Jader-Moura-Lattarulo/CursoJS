function app(){
    function criaCalculadora(){
        return {
            //Atributos
            display: document.querySelector('.display'),
            btnClear: document.querySelector('.btn-clear'),


            //Métodos
            inicia(){
                this.cliqueBotoes(); //this = calculadora
            },
            
            clearDisplay() {
                this.display.value = '';
            },
            
            apagaUm() {
                this.display.value = this.display.value.slice(0, -1);
            },

            realizaConta() {
                let conta = this.display.value;

                try {
                    conta = eval(conta);

                    if(!conta) {
                        alert('Conta inválida');
                        return;
                    }

                    this.display.value = conta;
                } catch(e) {
                    alert('Conta inválida');
                    return;
                }
            },

            cliqueBotoes(){
                //this -> calculadora
                document.addEventListener('click', function(e){//this passa as ser document, pois é ele quem chama o addEventListener
                    const el = e.target;

                    if(el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')) {
                        this.apagaUm();
                    }

                    if(el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    }
                }.bind(this));//.bind(this) traz de volta a utilização de this para calculadora.
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            }

        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia(); //É aqui que chama todo restante

}

app();

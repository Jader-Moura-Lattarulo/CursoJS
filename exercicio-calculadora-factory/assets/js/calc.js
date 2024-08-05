function app(){
    function criaCalculadora(){
        return {
            //Atributos
            display: document.querySelector('.display'),
            btnClear: document.querySelector('.btn-clear'),

            //Métodos
            inicia(){
                this.cliqueBotoes(); //this = calculadora
                this.pressionaEnter();
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
                    conta = eval(conta); // eval tenta ler tudo o que foi capturado como JavaScript, então é muito perigoso utilizar sem validações de entrada.

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
            },

            pressionaEnter() {
                this.display.addEventListener('keyup', e => {//mantém o this para o objeto criado
                    if(e.keyCode === 13) {
                        this.realizaConta();
                    }
                });
            }

        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia(); //É aqui que chama todo restante

}

app();

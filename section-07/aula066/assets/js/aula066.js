//Validando um formulário (usando classe)
class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValid();        
    }

    isValid(){
        let valid = true;

        for(let field of this.formulario.querySelectorAll('.validar')){
            console.log(field);
            
        }
    }
}

const valida = new ValidaFormulario();

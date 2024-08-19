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
        const validPasswords = this.passworsValid();

        if(validFields && validPasswords) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    passworsValid(){
        let valid = true;

        const password = this.formulario.querySelector('.password');
        const repeatPassword = this.formulario.querySelector('.repeatPassword');

        if(password.value !== repeatPassword.value){
            valid = false;
            this.createError(password,'Campos senha e repetir senha precisam ser iguais.');
            this.createError(repeatPassword,'Campos senha e repetir senha precisam ser iguais.');
        }

        if(password.value.length < 6 || password.value.length > 12){
            valid = false;
            this.createError(password, 'Senha precisa estar entre 6 ou 12 caracteres.')
        }
        
        return valid;
    }

    isValid(){
        let valid = true;

        for(let errorText of this. formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let field of this.formulario.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText;
            if(!field.value) {
                this.createError(field, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
            
            if(field.classList.contains('cpf')) {
                if(!this.validaCPF(field)) valid = false;
            }

            if(field.classList.contains('user')) {
                if(!this.validaUsuario(field)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(field){
        const usuario = field.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 e 13 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    validaCPF(field) {
        const cpf = new ValidaCPF(field.value);

        if(!cpf.valida()) {
            this.createError(field, 'CPF inválido.');
            return false;
        }
        
        return true;
    }

    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();

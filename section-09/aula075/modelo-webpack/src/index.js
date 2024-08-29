import GeraCPF from './modules/GeraCPF';

import'./assets/style/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

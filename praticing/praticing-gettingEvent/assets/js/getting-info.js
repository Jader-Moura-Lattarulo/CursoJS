function kiMeter() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const inputKi = event.target.querySelector('#ki');

        const ki = Number(inputKi.value);
        
        if(!ki){
            setResult('ki inválido');
            return;
        }

        
    });

    function paragraphCreate(){
        const paragraph = document.createElement('p');
        return paragraph;
    }
    
    function setResult(msg){
        const result = document.querySelector('#result');
        result.innerHTML = "";
        
        const paragraph = paragraphCreate();
        paragraph.innerHTML = msg;
        result.appendChild(paragraph);       
    }

}

kiMeter();

function kiMeter() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('Evento barrado');
        setResult('bla bla bla');
    });

    function setResult(msg){
        const result = document.querySelector('#result');
        result.innerHTML = "";
        const paragraph = document.createElement('p');
        paragraph.innerHTML = "Seu inceto";
        result.appendChild(paragraph);
    }

}

kiMeter();

function kiMeter() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('Evento barrado');
    });

}

kiMeter();

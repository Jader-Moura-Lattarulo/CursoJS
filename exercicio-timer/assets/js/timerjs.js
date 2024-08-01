function app(){
    const clock = document.querySelector('#clock');
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const reset = document.querySelector('.reset');
    let seconds = 0;
    let timer;

    start.addEventListener('click', function(event) {
        startClock();
    });

    stop.addEventListener('click', function(event) {
       alert('clicou em parar'); 
    });

    reset.addEventListener('click', function(event) {
        alert('clicou em zerar');
    });
    
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone:'GMT'
        });
    }

    function startClock(){
            timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

}

app();
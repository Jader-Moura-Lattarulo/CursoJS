function app(){
    const clock = document.querySelector('#clock');
    let seconds = 0;
    let timer;

    document.addEventListener('click', function (e) {
       const element = e.target;

       if (element.classList.contains('reset')) {
           clearInterval(timer);
           clock.classList.remove('stoped');
           clock.innerHTML = '00:00:00';
           seconds = 0        
       }

       if (element.classList.contains('stop')) {
           clearInterval(timer);
           clock.classList.add('stoped');
       }

       if (element.classList.contains('start')) {
           clock.classList.remove('stoped');
           clearInterval(timer);
           startClock();
       }
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
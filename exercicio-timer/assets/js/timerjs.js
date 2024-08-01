function app(){
    const timer = document.querySelector('#timer');

    function showTime() {
        let time = new Date();
        
        return time.toLocaleTimeString('pt-Br', {
            hour12:false
        });
    }

    timer.innerHTML = showTime();
}

app();
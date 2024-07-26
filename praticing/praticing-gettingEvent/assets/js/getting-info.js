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

    /*
     * Bulma – 12
     * Mestre Kame – 139
     * Kuririn – 1.770
     * Yamcha – 1.480
     * Piccolo – 3.500
     * Mr. Popo – 1.030
     * Goku – MAIS DE 8.000!!!
     */

    function getKiLevel(ki){
        //Arrey tem rage
        const level = ['Bulma', 'Mestre Kame', 'Kuririn', 'Yamcha', 'Piccolo', 'Mr.Popo', 'Goku'];

        if(ki >= 8000) return level[6];
        if(ki >= 1030) return level[5];
        if(ki >= 3500) return level[4];
        if(ki >= 1480) return level[3];
        if(ki >= 1770) return level[2];
        if(ki >= 139) return level[1];
        if(ki <= 12) return level[0];
    }

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

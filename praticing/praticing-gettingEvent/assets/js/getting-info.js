function kiMeter() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const inputKi = event.target.querySelector('#ki');

        const ki = Number(inputKi.value);
        
        if(!ki){
            setResult('Você não deve ter ki... Não consegue nem responder essa pergunta...');
            return;
        }

        const levelKi = getKiLevel(ki);

        const msg = `Seu ki é como o de ${levelKi}`;

        setResult(msg);
    });

    function getKiLevel(ki){
        //Arrey tem rage
        const level = ['Bulma', 'Mestre Kame', 'Kuririn', 'Yamcha', 'Piccolo', 'Mr.Popo', 'Goku'];

        if(ki >= 8000) return level[6];
        if(ki >= 1030) return level[5];
        if(ki >= 3500) return level[4];
        if(ki >= 1480) return level[3];
        if(ki >= 1770) return level[2];
        if(ki >= 139) return level[1];
        if(ki >= 12) return level[0];
        if(ki < 12) return ' um inceto';
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

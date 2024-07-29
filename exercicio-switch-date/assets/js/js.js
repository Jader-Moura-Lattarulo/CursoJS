function app(){
    
    const todayIs = new Date();
    const dayOfWeek = todayIs.getDay();


    function getDayOfWeek(dayOfWeek) {
        let dayOfWeekTxt;

        switch(dayOfWeek){
            case 0:
                dayOfWeekTxt = 'Domingo';
                return dayOfWeekTxt;
            case 1:
                dayOfWeekTxt = 'Segunda-feira';
                return dayOfWeekTxt;
            case 2:
                dayOfWeekTxt = 'Terça-feira';
                return dayOfWeekTxt;
            case 3:
                dayOfWeekTxt = 'Quarta-feira';
                return dayOfWeekTxt;
            case 4:
                dayOfWeekTxt = 'Quinta-feira';
                return dayOfWeekTxt;
            case 5:
                dayOfWeekTxt = 'Sexta-feira';
                return dayOfWeekTxt;
            case 6:
                dayOfWeekTxt = 'Sábado';
                return dayOfWeekTxt;
            default:
                dayOfWeekTxt = '';
                return dayOfWeekTxt;
        }
    }

    let dayOfWeekTxt = getDayOfWeek(dayOfWeek);

    console.log(todayIs, dayOfWeekTxt);
}

app();

function app(){
    function getDayOfWeek(dayOfWeek) {
        let dayOfWeekTxt;

        switch(dayOfWeek){
            case 0:
                dayOfWeekTxt = 'Domingo';
                return dayOfWeekTxt;
            case 1:
                dayOfWeekTxt = 'Segunda';
                return dayOfWeekTxt;
            case 2:
                dayOfWeekTxt = 'Terça';
                return dayOfWeekTxt;
            case 3:
                dayOfWeekTxt = 'Quarta';
                return dayOfWeekTxt;
            case 4:
                dayOfWeekTxt = 'Quinta';
                return dayOfWeekTxt;
            case 5:
                dayOfWeekTxt = 'Sexta';
                return dayOfWeekTxt;
            case 6:
                dayOfWeekTxt = 'Sábado';
                return dayOfWeekTxt;
            default:
                dayOfWeekTxt = '';
                return dayOfWeekTxt;
        }
    }

    const todayIs = new Date();
    const dayOfWeek = todayIs.getDay();

    console.log(todayIs, dayOfWeek);
}

app();

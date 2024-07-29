function app(){
    
    const todayIs = new Date();
    const dayOfWeek = todayIs.getDay();
    const monthOfYear = todayIs.getMonth();


    function zeroToTheLeft(num) {
        return num >= 10 ? num : `0${num}`;
    }

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

    function getMonthOfYear(monthOfYear) {
        let monthOfYearTxt;

        switch(monthOfYear){
            case 0:
                monthOfYearTxt = 'Janeiro';
                return monthOfYearTxt;
            case 1:
                monthOfYearTxt = 'Fevereiro';
                return monthOfYearTxt;
            case 2:
                monthOfYearTxt = 'Março';
                return monthOfYearTxt;
            case 3:
                monthOfYearTxt = 'Abril';
                return monthOfYearTxt;
            case 4:
                monthOfYearTxt = 'Maio';
                return monthOfYearTxt;
            case 5:
                monthOfYearTxt = 'Junho';
                return monthOfYearTxt;
            case 6:
                monthOfYearTxt = 'Julho';
                return monthOfYearTxt;
            case 7:
                monthOfYearTxt = 'Agosto';
                return monthOfYearTxt;
            case 8:
                monthOfYearTxt = 'Setembro';
                return monthOfYearTxt;
            case 9:
                monthOfYearTxt = 'Outubro';
                return monthOfYearTxt;
            case 10:
                monthOfYearTxt = 'Novembro';
                return monthOfYearTxt;
            case 11:
                monthOfYearTxt = 'Dezembro';
                return monthOfYearTxt;
            default:
                monthOfYearTxt = '';
                return monthOfYearTxt;
        }
    }

    function formateDate(dayOfWeekTxt, monthOfYearTxt, todayIs){
                
        const day = zeroToTheLeft(todayIs.getDate());
        const year = zeroToTheLeft(todayIs.getFullYear());
        const hour = zeroToTheLeft(todayIs.getHours());
        const min = zeroToTheLeft(todayIs.getMinutes());

        return `${dayOfWeekTxt}, ${day} de ${monthOfYearTxt} de ${year} ${hour}:${min}.`;
    }

    let dayOfWeekTxt = getDayOfWeek(dayOfWeek);
    let monthOfYearTxt = getMonthOfYear(monthOfYear);
    let formatedDate = formateDate(dayOfWeekTxt, monthOfYearTxt, todayIs);

    console.log(formatedDate);
}

app();

function app(){
    
    const resultDisplay = document.querySelector("#completeDate");
    const todayIs = new Date();
    const dayOfWeek = todayIs.getDay();
    const monthOfYear = todayIs.getMonth();

    function zeroToTheLeft(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function getDayOfWeek(dayOfWeek) {
        let dayOfWeekTxt = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

        return dayOfWeekTxt[dayOfWeek];
    }

    function getMonthOfYear(monthOfYear) {
        let monthOfYearTxt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        return monthOfYearTxt[monthOfYear];
    }

    function formateDate(dayOfWeekTxt, monthOfYearTxt, todayIs){
                
        const day = zeroToTheLeft(todayIs.getDate());
        const year = zeroToTheLeft(todayIs.getFullYear());
        const hour = zeroToTheLeft(todayIs.getHours());
        const min = zeroToTheLeft(todayIs.getMinutes());

        return `${dayOfWeekTxt}, ${day} de ${monthOfYearTxt} de ${year} ${hour}:${min}.`;
    }

    function pushToThePage(resultDisplay, formatedDate){
        resultDisplay.innerHTML = formatedDate;
        return resultDisplay; 
    }

    const dayOfWeekTxt = getDayOfWeek(dayOfWeek);
    const monthOfYearTxt = getMonthOfYear(monthOfYear);
    const formatedDate = formateDate(dayOfWeekTxt, monthOfYearTxt, todayIs);

    console.log(formatedDate);
    pushToThePage(resultDisplay, formatedDate);
}

app();

//Objeto Date
//const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(0 + tresHoras); 01/01/1970 Timestamp unix ou época unix

//const data = new Date(2019, 3, 20, 15, 14, 27); //Sat Apr 20 2019 15:14:27 GMT-0300 (Horário Padrão de Brasília)

//const data = new Date(); addEventListener, m, d, h, M, s, ms

const data = new Date(1722264646411);

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa no zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado

console.log(data.toString());
//console.log(Date.now());
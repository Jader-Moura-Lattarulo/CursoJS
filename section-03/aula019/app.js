// Operador ternário ? :
const userPoints = 999;
const userNivel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const userColor = 'Black';
const colorDefault = userColor || 'Pink';

console.log(userNivel, userColor);

//if (userPoints >= 1000) {
//    console.log(`Usuário VIP`);
//} else {
//    console.log(`Usuário comum`);
//}

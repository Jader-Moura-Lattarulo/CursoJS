/** Avaliação de Curto-Circuito
 * && -> false && true -> O valor falso
 * || -> true || false -> O valor primeiro valor verdadeiro
 * 
 * FALSY
 * false (literal)
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 * 
 */

function falaOi() {
    return 'Oi';
}

const vaiExecutar = NaN;

console.log(vaiExecutar && falaOi());

const a = 0;
const b = null;
const c = 'false'; //valor real string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

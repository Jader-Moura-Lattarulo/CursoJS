let varA = `A`; //B
let varB = `B`; //C
let varC = `C`; //A
let varD;

/*varD = varA;
 *varA = varB;
 *varB = varC;
 *varC = varD; 
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
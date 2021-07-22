

let A = true;
let B = false; 

const myCssHead = `
    background: #ddeeff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    padding: 10px 10px 10px 10px;
`;
let myCssBoby = `

//     background: #dfd;
//     font-family: cursive;
//     border: 1px solid #aaa;

// `;


let myCssReal = `

//     background: #dfd;
//     font-family: helvetica;
//     border: 2px solid #aaa;

// `;
console.log(`%cOperadores AND`,myCssHead);
console.log(`%c                                                     `,' border-bottom: 5px dotted #aaa; padding:.1em; font-size: 1em;');
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssHead);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBoby);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssReal);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);

console.log(`Operadores OR`);
console.log(`1. A:`,!(!A),` (OPERADOR OR) B:`,!B,` A || B =`,!(!A) || !B);
console.log(`2. A:`,A,` (OPERADOR OR) B:`,B,` A || B =`,A || B);
console.log(`3. A:`,!A,` (OPERADOR OR) B:`,!B,` A || B =`,!A || !B);
console.log(`4. A:`,!A,` (OPERADOR OR) B:`,B,` A || B =`,!A || B);
console.log(`A:`,A,`B:`,B,`Datos verdaderos`);

console.log(`Operadores NOT`);
console.log(`A:`,A,` (OPERADOR NOT) !A`,!A);
console.log(`B:`,B,` (OPERADOR NOT) !B`,!B);

let A2 = true;
let B2 = true;

let tabla = document.querySelector("#myTabla");
tabla.innerHTML = `
    <tr>
        <td>${false}</td>
        <td>${false}</td>
        <td>${false && false}</td>
    </tr>
    <tr>
        <td>${false}</td>
        <td>${true}</td>
        <td>${false && true}</td>
    </tr>
    <tr>
        <td>${true}</td>
        <td>${false}</td>
        <td>${true && false}</td>
    </tr>
    <tr>
        <td>${A2}</td>
        <td>${B2}</td>
        <td>${A2 && B2}</td>
    </tr>
`;


let A1 = true 
let B1 = false 

let tabla1 = document.querySelector("#myTabla2");
tabla1.innerHTML = `
    <tr>
        <td>${false}</td>
        <td>${false}</td>
        <td>${false || false}</td>
    </tr>
    <tr>
        <td>${false}</td>
        <td>${true}</td>
        <td>${false || true}</td>
    </tr>
    <tr>
        <td>${true}</td>
        <td>${false}</td>
        <td>${true || false}</td>
    </tr>
    <tr>
        <td>${A1}</td>
        <td>${B1}</td>
        <td>${A1 || B1}</td>
    </tr>
`;
let tabla3 = document.querySelector("#myTabla3");
tabla3.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;
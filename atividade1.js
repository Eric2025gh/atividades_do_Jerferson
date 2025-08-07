"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// soma fácil
const fs = __importStar(require("fs"));
const input = fs.readFileSync(0, "utf8");
let A = parseInt(input.split("\n")[0]);
let B = parseInt(input.split("\n")[1]);
console.log(A + B);
// média inteira
const input2 = fs.readFileSync(0, "utf8");
let A2 = parseInt(input2.split("\n")[0]);
let B2 = parseInt(input2.split("\n")[1]);
let media = Math.floor((A2 + B2) / 2);
console.log(media);
// área do quadrado
const input3 = fs.readFileSync(0, "utf8");
let L = parseInt(input3.split("\n")[0]);
console.log(L * L);
// positivo, negativo ou nulo
const input4 = fs.readFileSync(0, "utf8");
let X = parseInt(input4.split("\n")[0]);
if (X > 0) {
    console.log("positivo");
}
else if (X < 0) {
    console.log("negativo");
}
else {
    console.log("nulo");
}
// bondinho
const input5 = fs.readFileSync(0, "utf8");
let A3 = parseInt(input5.split("\n")[0]);
let M = parseInt(input5.split("\n")[1]);
if ((A3 >= 1 && A3 <= 50) && (M >= 1 && M <= 50)) {
    console.log(A3 + M <= 50 ? 'S' : 'N');
}
// par ou ímpar
const input6 = fs.readFileSync(0, "utf8");
let B3 = parseInt(input6.split("\n")[0]);
let C = parseInt(input6.split("\n")[1]);
let Resto = (B3 + C) % 2;
console.log(Resto === 0 ? 'Bino' : 'Cino');
// soma
const input7 = fs.readFileSync(0, "utf8");
let X2 = parseInt(input7.split("\n")[0]);
let Y = parseInt(input7.split("\n")[1]);
console.log(X2 + Y);
// gangorra
const input8 = fs.readFileSync(0, "utf8");
let lines = input8.trim().split(/\s+/);
let P1 = parseInt(lines[0]);
let C1 = parseInt(lines[1]);
let P2 = parseInt(lines[2]);
let C2 = parseInt(lines[3]);
const ladoEsquerdo = P1 * C1;
const ladoDireito = P2 * C2;
if (ladoEsquerdo > ladoDireito) {
    console.log(-1);
}
else if (ladoEsquerdo < ladoDireito) {
    console.log(1);
}
else {
    console.log(0);
}
// lâmpada
const input9 = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const N = parseInt(input9[0]);
const comandos = input9.slice(1).map(Number);
let A4 = 0;
let B4 = 0;
for (let i = 0; i < N; i++) {
    const interruptor = comandos[i];
    if (interruptor === 1) {
        A4 = A4 === 0 ? 1 : 0;
    }
    else if (interruptor === 2) {
        A4 = A4 === 0 ? 1 : 0;
        B4 = B4 === 0 ? 1 : 0;
    }
}
console.log(A4);
console.log(B4);
// divisão
const input10 = fs.readFileSync(0, "utf8");
let A5 = parseFloat(input10.split("\n")[0]);
let B5 = parseFloat(input10.split("\n")[1]);
let resultado = A5 / B5;
console.log(resultado.toFixed(2));
// prêmio do milhão
const input11 = fs.readFileSync(0, "utf8").trim().split("\n");
const N2 = parseInt(input11[0]);
const acessos = input11.slice(1).map(Number);
let soma = 0;
let dias = 0;
for (let i = 0; i < N2; i++) {
    soma += acessos[i];
    dias++;
    if (soma >= 1000000)
        break;
}
console.log(dias);
// garçom
const input12 = fs.readFileSync(0, "utf8");
const linhas = input12.trim().split("\n");
const N3 = parseInt(linhas[0]);
let totalCoposQuebrados = 0;
for (let i = 1; i <= N3; i++) {
    const [L2, C3] = linhas[i].split(" ").map(Number);
    if (L2 > C3) {
        totalCoposQuebrados += C3;
    }
}
console.log(totalCoposQuebrados);
// repetir x vezes
const input13 = fs.readFileSync(0, "utf8");
const X3 = parseInt(input13);
for (let i = 0; i < X3; i++) {
    console.log("NepsAcademy eh Sucesso");
}
// área da circunferência
const input14 = fs.readFileSync(0, "utf8");
const R = parseFloat(input14);
const pi = 3.1416;
const area = pi * R * R;
console.log(area.toFixed(2));
//# sourceMappingURL=atividade1.js.map
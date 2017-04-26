function Complex(x=0,y=0){
  var real = 0;
  var imaginary = 0;
  var div;
  if(typeof x === 'string'){
    div = (x.trim()).split("+");
    if(div.length < 2){
      // else {
      if(x.indexOf("i") === -1){
        real = parseFloat(div[0]);
        imaginary = 0;
      }
      if(x.indexOf("i") !== -1){
        real = 0;
        imaginary = parseFloat(div[0]);
      }
    }
    else{
      real = parseFloat(div[0].trim());
      imaginary = parseFloat(div[1].trim());
    }
  }
  else{
      real = x;
      imaginary = y;
    }
  var numbers = {
      real: real,
      imaginary: imaginary
  }
  return numbers;
}


function add(a,b) {
  var mais = {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary
  }
  return mais;
}
function subtract(a,b) {
  var menos = {
    real: a.real - b.real,
    imaginary: a.imaginary - b.imaginary
  }
  return menos;
}
function multiply(a,b){
  var mult = {
    real: (a.real*b.real)+(a.imaginary*b.imaginary*-1),
    imaginary: (a.real*b.imaginary)+(a.imaginary*b.real)
  }
  return mult;
}
function conjugate(z) {
  var conj = {
    real: z.real,
    imaginary: z.imaginary * -1
  }
  return conj;
}
function complexToString(c){
  var realP = c.real;
  var imaginaryP = c.imaginary;
  var stringComplex = "";
  if(realP === 0){
    stringComplex += imaginaryP + "i";
  }else if (imaginaryP === 0) {
    stringComplex += realP;
  }
  if((realP !== 0) && (imaginaryP !== 0)){
    if(imaginaryP < 0){
      stringComplex += realP.toString() + imaginaryP.toString() + "i";
    } else {
      if (imaginaryP > 0) {
        stringComplex += realP + "+" + imaginaryP + "i";

      }
    }
  }
  return stringComplex;
}
// O QUE POSSO RETORNAR PARA QUE NÃO Dê ERRO POR 'stringComplex' NÃO ESTAR DEFINIDO

var c1 = {real: 2, imaginary: 3};
console.log(c1.real === 2);
console.log(c1.imaginary === 3);

var c2 = Complex('2+3i');
console.log(c2.real === 2);
console.log(c2.imaginary === 3);

var c3 = Complex('5');
console.log(c3.real === 5);
console.log(c3.imaginary === 0);

var c4 = Complex('4i');
console.log(c4.real === 0);
console.log(c4.imaginary === 4);

var c5 = Complex('5 + 4i');
console.log(c5.real === 5);
console.log(c5.imaginary === 4);

var c6 = Complex('5.5 + 4.3i');
console.log(c6.real === 5.5);
console.log(c6.imaginary === 4.3);

var c7 = Complex(2, 3);
console.log(c7.real === 2);
console.log(c7.imaginary === 3);

var c8 = Complex(2);
console.log(c8.real === 2);
console.log(c8.imaginary === 0);

var c9 = add(c1, c5); // 2+3i + 5+4i = 7+7i
console.log(c9.real === 7);
console.log(c9.imaginary === 7);

var c10 = subtract(c5, c1); // 5+4i - 2+3i = 3+1i
console.log(c10.real === 3);
console.log(c10.imaginary === 1);

var c11 = multiply(c1, c9); // 2+3i * 7+7i = 2*7 - 3*7
console.log(c11.real === -7);
console.log(c11.imaginary === 35);

var c12 = subtract(c1, c10); // 2+3i - 3+1i = -1+2i
console.log(c12.real === -1);
console.log(c12.imaginary === 2);

var c13 = conjugate(c9); // conjugate(7+7i) = 7-7i
console.log(c13.real === 7);
console.log(c13.imaginary === -7);

console.log(add(Complex("4+7i"), Complex("5+9i")).real === 9);
console.log(add(Complex("4+7i"), Complex("5+9i")).imaginary === 16);

// adicione mais 2 casos de teste para add
var c14 = add(c2,c4);
console.log(c14.real === 2);
console.log(c14.imaginary === 7);

var c15 = add(c9,c10);
console.log(c15.real === 10);
console.log(c15.imaginary === 8);
//

//adicione mais dois casos para subtract
var c16 = subtract(c4,c8);
console.log(c16.real === -2);
console.log(c16.imaginary === 4);

var c17 = subtract(c8,c5);
console.log(c17.real === -3);
console.log(c17.imaginary === -4);
//

//adicione mais dois casos para multiply
var c18 = multiply(c14,c17);
console.log(c18.real === 22);
console.log(c18.imaginary === -29);

var c19 = multiply(c18,c11);
console.log(c19.real === 861);
console.log(c19.imaginary === 973);
//

//adicione mais dois casos para conjugate
var c20 = conjugate(c19);
console.log(c20.real === 861);
console.log(c20.imaginary === -973);

var c21 = conjugate(c8);
console.log(c21.real === 2);
console.log(c21.imaginary === 0);

//adicione dois casos para divide
var s1 = complexToString(c11);
console.log(s1 === "-7+35i");
console.log(complexToString(c12) === "-1+2i");
console.log(complexToString(c13) === "7-7i");
console.log(complexToString(Complex(8)) === "8");
console.log(complexToString(Complex(8, 2)) === "8+2i");
console.log(complexToString(Complex("8 + 2i")) === "8+2i");

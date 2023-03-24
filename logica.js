let num = prompt("Ingrese un numero entero")

if (isNaN(num) || num < 1) {
  alert("por favor ingrese un dato valido")
} else {
  console.log(fibonacci(num));
}

function fibonacci(num) {
  let a = 0, b = 1, datosTemp;
  let fibArr = [];
  for (let i = 0; i < num; i++) {
    fibArr.push(b);
    datosTemp = a + b; 
    a = b; 
    b = datosTemp;

    
  }
  return fibArr; 
}
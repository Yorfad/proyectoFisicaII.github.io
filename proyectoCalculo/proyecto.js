
 const iconoMenu = document.getElementById("iconoMenu")

 const header = document.querySelector(".header")
 
 const expand = () =>{
  header.classList.toggle("expand")
 }

iconoMenu.addEventListener("click", expand);

 
const calcularEnergiaCinetica = () => {
    const inputMasa = document.getElementById("inputMasa").value;
    const inputVelocidad = document.getElementById("inputVelocidad").value;
    const resultado = document.getElementById("resultado");
    resultadoCalculado = (inputMasa * (inputVelocidad * inputVelocidad))/2;
    console.log(resultadoCalculado)
	resultado.innerHTML = resultadoCalculado;
};

const calcularEnergiaPotencialGravitacional = () => {
    const inputMasa = document.getElementById("inputMasa").value;
    const inputGravedad = document.getElementById("inputGravedad").value;
    const inputAltura = document.getElementById("inputAltura").value;
    const resultado = document.getElementById("resultado");
    resultadoCalculado = inputAltura * inputMasa * inputGravedad;
    console.log(resultadoCalculado)
	resultado.innerHTML = resultadoCalculado;
};
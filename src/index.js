import  validator from './validator.js';
var btnsubmit=document.getElementById('submit');
let Num=document.getElementById('inputNumber');
//Dar funcionalidad a mi botón, mostrando un mensaje si la tarjeta es válida o inválida
btnsubmit.addEventListener('click',()=>{
    var NumTar = Num.value;
    const validAlert = document.getElementById('validAlert');
    let name = document.getElementById('name').value;
        if(validator.isValid(NumTar)===true){ 
            validAlert.innerText = (name) + "¡TU TARJETA ES VÁLIDA!";
            validAlert.style.backgroundColor = "#91f769";
        }else{
            validAlert.innerText= `${name} ¡TU TARJETA NO ES VÁLIDA!`;
            validAlert.style.backgroundColor = "#FA7777";
        }
  Num.value=validator.maskify(NumTar);
    })
//Funcionalidad botón validar otra tarjeta
    const btnreload = document.getElementById('reload');
btnreload.addEventListener('click', () => { 
    location.reload();
});
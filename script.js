const numberA = document.getElementById('A');
const numberB = document.getElementById('B');
const button = document.getElementById('submitButton');
const result = document.getElementById('result');

button.addEventListener('click', function(e){
    e.preventDefault();

    const A = Number(numberA.value);
    const B = Number(numberB.value);

    if(A === B){
        numberA.classList.remove('error');
        numberB.classList.remove('error');
        result.className ='';
        result.classList.add('equalMensage');
        result.textContent = numberA.value + ' é igual ' + numberB.value;
        return;
    }if(A < B){
        numberA.classList.add('error');
        numberB.classList.add('error');
        result.className ='';
        result.classList.add('errorMensage');
        result.textContent = 'Está Errado ' + numberA.value + ' é menor que ' + numberB.value;
        return;
    }else{
        numberA.classList.remove('error');
        numberB.classList.remove('error');
        result.className ='';
        result.classList.add('rightMensage');
        result.textContent = 'Tudo certo ' + numberA.value + ' é maior que ' + numberB.value;
        return;
    };
});
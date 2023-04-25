function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(input.value)) {
		input.style.borderColor = 'green';
        input.style.backgroundColor = 'lightGreen';
	} else {
		input.style.borderColor = '#FF8A8AE8';
        input.style.backgroundColor = '#FFFFFFE8';
	}
}

function getMail(){
    var mail = document.getElementById("mailInput").value;
    if (isEmailValid(input.value)){
        alert(`Спасибо! Новости будут приходить по указанному адресу: ${mail}`);
    } else if (document.getElementById("mailInput").value === ""){
        alert("Введите адрес электронной почты.");
    } else {
        alert("Введен некорректный адрес.")
    }
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');
input.addEventListener('input', onInput);

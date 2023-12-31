
const exerciseNav = document.getElementById("exercise-nav");

exerciseNav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        const exerciseId = event.target.getAttribute("data-exercise");
        openModal(exerciseId);
    }
});

function openModal(exerciseId) {
    const modal = document.getElementById(exerciseId + "-modal");
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function changeBackgroundColor() {
    var select = document.getElementById("selectColor");
    var selectedColor = select.options[select.selectedIndex].value;
    document.body.style.backgroundColor = selectedColor;
}

var paragraph = document.getElementById("paragraph");
function toggleText() {
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

function checkButton() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var submitButton = document.getElementById('submitButton');
    if (checkboxes.length >= 2) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
}

//exercício 2
const redLink = document.getElementById('red-link');
const greenLink = document.getElementById('green-link');
const blueLink = document.getElementById('blue-link');
const yellowLink = document.getElementById('yellow-link');

redLink.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'red';
});

greenLink.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'green';
});

blueLink.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'blue';
});

yellowLink.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'yellow';
});

const allLinks = [redLink, greenLink, blueLink, yellowLink];

allLinks.forEach(link => {
    link.addEventListener('mouseout', function () {
        document.body.style.backgroundColor = '';
    });
});


//exercício 3
function changeBackgroundColor() {
    var select = document.getElementById("selectColor");
    var selectedColor = select.options[select.selectedIndex].value;

    if (selectedColor !== "") {
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = '';
    }
}

//exercício 6

var text = document.getElementById("text");

function whiteFont() {
    text.style.color = 'white';
}

function blackFont() {
    text.style.color = 'black';
}

function whiteBackgroud() {
    text.style.backgroundColor = 'white';
}

function blackBackgroud() {
    text.style.backgroundColor = 'black';
}

//exercício 7 
var decreaseIncreaseText = document.getElementById("decreaseIncreaseText");

function increaseFontSize() {
    var currentSize = window.getComputedStyle(decreaseIncreaseText, null).getPropertyValue('font-size');
    var newSize = (parseInt(currentSize) + 2) + 'px';
    decreaseIncreaseText.style.fontSize = newSize;
}

function decreaseFontSize() {
    var currentSize = window.getComputedStyle(decreaseIncreaseText, null).getPropertyValue('font-size');
    var newSize = (parseInt(currentSize) - 2) + 'px';
    decreaseIncreaseText.style.fontSize = newSize;
}

//exercício 8
var textUppercaseLowercase = document.getElementById("textUppercaseLowercase");
function toUppercase() {
    textUppercaseLowercase.textContent = textUppercaseLowercase.textContent.toUpperCase();
}

function toLowercase() {
    textUppercaseLowercase.textContent = textUppercaseLowercase.textContent.toLowerCase();
}

//exercício 9
function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (login === '' || password === '' || confirmPassword === '') {
        alert("Preencha todos os campos.");
        return false;
    } else if (password !== confirmPassword) {
        alert("A senha e a confirmação de senha não correspondem.");
        return false;
    } else if (password.length < 6 || password.length > 10) {
        alert("A senha deve ter entre 6 e 10 caracteres. Atualmente a senha tem: " + password.length + " elementos");
        return false;
    }

    document.getElementById("login").value = '';
    document.getElementById("password").value = '';
    document.getElementById("confirmPassword").value = '';

    alert("Usuário cadastrado com sucesso!");

    setTimeout(function () {
        closeModal('exercise9-modal');
    }, 2000);

    return false;
}

//exercício 10

function enableCPF() {
    document.getElementById("cpfLabel").style.display = "block";
    document.getElementById("cpf").style.display = "block";
    document.getElementById("cnpjLabel").style.display = "none";
    document.getElementById("cnpj").style.display = "none";
    document.getElementById("dobLabel").style.display = "block";
    document.getElementById("dob").style.display = "block";
}

function enableCNPJ() {
    document.getElementById("cpfLabel").style.display = "none";
    document.getElementById("cpf").style.display = "none";
    document.getElementById("cnpjLabel").style.display = "block";
    document.getElementById("cnpj").style.display = "block";
    document.getElementById("dobLabel").style.display = "none";
    document.getElementById("dob").style.display = "none";
}


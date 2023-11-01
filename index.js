
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

var text = document.getElementById("text");

function changeFontColor() {
    text.style.color = (text.style.color === 'black') ? 'white' : 'black';
}

function changeBackgroundColor() {
    text.style.backgroundColor = (text.style.backgroundColor === 'white') ? 'black' : 'white';
}

function changeFontColorBack() {
    text.style.color = (text.style.color === 'white') ? 'black' : 'white';
}

function changeBackgroundColorBack() {
    text.style.backgroundColor = (text.style.backgroundColor === 'black') ? 'white' : 'black';
}

var text = document.getElementById("text");

function increaseFontSize() {
    var currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var newSize = (parseInt(currentSize) + 2) + 'px';
    text.style.fontSize = newSize;
}

function decreaseFontSize() {
    var currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var newSize = (parseInt(currentSize) - 2) + 'px';
    text.style.fontSize = newSize;
}

var text = document.getElementById("text");

function toUppercase() {
    text.textContent = text.textContent.toUpperCase();
}

function toLowercase() {
    text.textContent = text.textContent.toLowerCase();
}

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
        alert("A senha deve ter entre 6 e 10 caracteres.");
        return false;
    }
    return true;
}

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
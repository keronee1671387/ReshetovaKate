
// Анимация на странице
$("#iphone").click(function(){
    $(this).hide("slow");
});

$('#stick').click(function(){
    $("#osntext").slideUp('slow');
});

// ! Валидация формы обратной связи !

//проверка имени 
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Данные ведены верно";
        document.getElementById("first").style.backgroundColor = "rgb(206, 255, 214)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, ведите 2-15 символов";
        document.getElementById("first").style.backgroundColor = "rgba(128, 128, 128, 0)";
        return false;
    }
}
//проверка почты
function checkEmail() {
    var first = document.getElementById("email").value;
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check2").style.color = "green";
        document.getElementById("first_Check2").innerHTML = "Данные ведены верно";
        document.getElementById("email").style.backgroundColor = "rgb(206, 255, 214)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check2").style.color = "red";
        document.getElementById("first_Check2").innerHTML = "Ведите верный формат: Example@gmail.com";
        document.getElementById("email").style.backgroundColor = "rgba(128, 128, 128, 0)";
        return false;
    }
}



/*
function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;

    if(reg.test(address)) {
        document.getElementById("email").style.backgroundColor = "rgb(206, 255, 214)";
        return true;   
    }
    else {
        document.getElementById("email").style.backgroundColor = "rgb(255, 201, 201)";
        alert('Введите корректный e-mail, формат: Example@mail.ru');
        return false;
    }    
 }
*/
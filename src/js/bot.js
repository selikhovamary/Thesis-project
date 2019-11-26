var sendMsg = document.querySelector('#sendMsg');
var firstName = document.querySelector('#name');
var mobileTel = document.querySelector('#tel');
var msg;

sendMsg.addEventListener('click', function () {
    deleteError()
    if (firstName.value && mobileTel.value) {
        msg = 'Name: ' + firstName.value + ' ' + '; Tel: ' + mobileTel.value;
        var botLink = 'https://api.telegram.org/bot892587873:AAFw-auKXmBAvQ0x77e-hty-BvS-faOHS0Y/sendMessage?chat_id=214831481&text=' + msg;
        fetch(botLink);
        clearInputs();
        sendMsg.classList.add('success');
        sendMsg.innerHTML = '&#10004;';
        setTimeout(function(){
            if (sendMsg.classList.contains('success')){
                sendMsg.classList.remove('success');
                sendMsg.innerHTML = 'Send';
            }
        }, 2000)
    } else {
        checkInputs()
    }
})

function clearInputs() {
    var inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function checkInputs() {
    var inputs = document.querySelectorAll('input')
    for (i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].classList.add('empty');
        } else {
            continue;
        }
    }
}
function deleteError(){
    var inputs = document.querySelectorAll('input')
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('empty')) {
            inputs[i].classList.remove('empty');
        } else {
            continue;
        }
    }
}


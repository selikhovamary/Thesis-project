var button = document.querySelector('button');
var firstName = document.querySelector('#name');
var mobileTel = document.querySelector('#tel');
var msg;
console.log(button)

button.addEventListener('click', function(){
    if (firstName.value && mobileTel.value){
msg = 'Name: ' + firstName.value + ' ' + '; Tel: ' + mobileTel.value;
var botLink = 'https://api.telegram.org/bot892587873:AAFw-auKXmBAvQ0x77e-hty-BvS-faOHS0Y/sendMessage?chat_id=214831481&text=' + msg;
fetch(botLink)} 
})
// else if (!firstName.value && !mobileTel.value) {
//     firstName.style = "background: #ff00001f; border: 2px solid #620808";
//     mobileTel.style = "background: #ff00001f; border: 2px solid #620808";
// } else if (!firstName.value) {
//     firstName.style = "background: #ff00001f; border: 2px solid #620808";
// } else {
//     mobileTel.style = "background: #ff00001f; border: 2px solid #620808";
// }
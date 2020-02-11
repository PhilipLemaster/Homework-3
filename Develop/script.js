// Assignment Code
var submit = document.querySelector("#submit");

let upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let lower = ['abcdefghijklmnopqrstuvwxyz']
let num = ['1234567890']
let special = ['!@#$%^&*()']

var characters = [' ']

submit.addEventListener("click", function(x) {

    do { 
      var pwlength = parseInt(prompt('How long would you like your password to be?'))
        if (pwlength > 128) {
        alert('That password is too long! Please enter a value with less than 128 characters.')
        }
    
        if (pwlength < 8) {
        alert('That password is too short! Please enter a value with at least 8 characters.')
        }
      }
    while (pwlength > 128 || pwlength < 8 )
    
    let pwupper = confirm('Would you like your password to have uppercase characters?')
      if (pwupper == false) {
        alert ('Uppercase characters will not be used!')
      }
      if (pwupper == true) {
        alert ('Uppercase characters will be used!')
        characters += upper
      }
    
    let pwlower = confirm('Would you like your password to have lowercase characters?')
      if (pwlower == false) {
        alert ('Lowercase characters will not be used!')
      }
      if (pwlower == true) {
        alert ('Lowercase characters will be used!')
        characters += lower
      }
    
    let pwnum = confirm('Would you like your password to have numbers?')
      if (pwnum == false) {
        alert ('Numbers will not be used!')
      }
      if (pwnum == true) {
        alert ('Numbers will be used!')
        characters += num
      }
    
    let pwspecial = confirm('Would you like your password to have special characters?')
      if (pwspecial == false) {
        alert ('Special characters will not be used!')
      }
      if (pwspecial == true) {
        alert ('Special characters will be used!')
        characters += special
      }
      
      yourPw.value = password(pwlength, characters)
});

function password(l,characters) {
  var pwd = '';
  for (var i = 0; i < l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

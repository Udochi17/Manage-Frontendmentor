const userInput = document.querySelector('.user-input');
const error = document.querySelector('.input-error');
const inputBtn = document.querySelector('.input-btn');




inputBtn.addEventListener("click", () => {
// alert( `${email}: ${userInput.value}` );
const regex = /(.+@[a-z]+[.][com])\w+/gi;
const email = regex.test(userInput.value);
if(email){
    userInput.value = '';
    alert ('Thank you for signing Up!'); 
    error.innerText = '';
} else { 
    error.innerText = 'Please insert a valid email';
    userInput.value ='';   
    }
      
})

const slider = new A11YSlider(document.querySelector('.slider'), {

    adaptiveHeight: true,
    dots: true
  });
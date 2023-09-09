(function(){
    var skills = document.querySelector(".our-skills");
    var progressSpans = document.querySelectorAll(".the-progress span");
    
    window.onscroll = function (){
    if(window.scrollY >= skills.offsetTop){
      progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
    };
  })();
    var nums = document.querySelectorAll(".box .number");
    let stats = document.getElementById("stats");
    let started = false; // Function Started ? No

window.onscroll = function(){
  if(window.scrollY >= stats.offsetTop){
    if(!started){
      nums.forEach((number) => startCount(number))
    }
    started = true;
  }
}
function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(() =>{
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(count)
    }
  }, 2000 / goal);
}



const inputName = document.getElementById("username");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const textarea = document.getElementById("textarea");

document.forms[1].addEventListener('submit',function(e){
  // e.preventDefault();
  valid = false;

  const inputName_value = inputName.value;
  const inputEmail_value = inputEmail.value;
  const inputPhone_value = inputPhone.value;
  const textarea_value = textarea.value;

  var required = 30;
  var left = required - textarea_value.length;

  let PhoneRe = /^(\+2|002)?01[0125][0-9]{8}$/;
  let ValidationResult = PhoneRe.test(inputPhone_value);

  if(inputName_value.length  == 0 || inputEmail_value.length  == 0 || inputPhone_value.length  == 0 || textarea_value.length  == 0){
    document.querySelector('.formError').style.display = "block";
    document.querySelector('.formError').innerHTML = "All Inputs Is Required";
    e.preventDefault();
  }if(inputName_value.length  == 0){
    document.querySelector('.nameError').style.display = "block";
    document.querySelector('.nameError').innerHTML = "Name Is Required";
    e.preventDefault();
  }else if(Number(inputName_value)){
    document.querySelector('.nameError').style.display = "block";
    document.querySelector('.nameError').innerHTML = "Name Must Be String";
    e.preventDefault();
  }else if(inputName_value.length < 10){
    document.querySelector('.nameError').style.display = "block";
    document.querySelector('.nameError').innerHTML = "Name Must Be More Than 10";
    e.preventDefault();
  }if(inputEmail_value.length  == 0){
    document.querySelector('.emailError').style.display = "block";
    document.querySelector('.emailError').innerHTML = "Email Is Required";
    e.preventDefault();
  }if(ValidationResult === false){
    document.querySelector('.phoneError').style.display = "block";
    document.querySelector('.phoneError').innerHTML = "Phone Not Valid";
    e.preventDefault();
  }if(textarea_value.length  == 0 ){
    document.querySelector('.textareaError').style.display = "block";
    document.querySelector('.textareaError').innerHTML = "Textarea Is Required";
    e.preventDefault()
  }else if(left > 0){
    document.querySelector('.textareaError').style.display = "block";
    document.querySelector('.textareaError').innerHTML = left + 'more characters required';
    e.preventDefault()
  }
  setTimeout(()=>{
    document.querySelector('.formError').style.display = "none";
    document.querySelector('.textareaError').style.display = "none";
    document.querySelector('.nameError').style.display = "none";
    document.querySelector('.emailError').style.display = "none";
    document.querySelector('.phoneError').style.display = "none";
  },2000)
  if(inputName_value.length  !== 0 || inputEmail_value.length  !== 0 || inputPhone_value.length  !== 0 || textarea_value.length  !== 0){
    document.querySelector('.formError').style.display = "none";
    valid = true;
  }
  {
  }
});



// The End Of The Year Date To Conutdown To

// 1000 Millseconds = 1 Second
// let countDownDate = new Date().getTime();
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(()=>{
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And CounDown Date
  let dateDiff  = countDownDate - dateNow;

  // Get Time Units

  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000))

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

  if(dateDiff < 0){
    clearInterval(counter)
  }
},1000)

/*
function popup() {
  let overlay = document.createElement('div');
  let div = document.createElement('div');
  let divIcon = document.createElement('div');
  let icon = document.createElement('div');
  let faIcon = document.createElement('div');
  let content = document.createElement('div');

  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  let button = document.createElement('button');

  let h1Text = document.createTextNode('Thank You!')
  let pText = document.createTextNode(`Follow Me :)`)
  let buttonText = document.createTextNode(`Ok`)

  h1.appendChild(h1Text)
  p.appendChild(pText)
  button.appendChild(buttonText)

  overlay.className = 'overlay';
  div.className = 'popup';
  divIcon.className = 'check-icon';
  icon.className = 'icon';
  faIcon.className = 'fa fa-check';
  content.className = 'content';
  button.className = 'close-btn';

  overlay.appendChild(div)
  div.appendChild(divIcon)
  div.appendChild(content)
  content.appendChild(h1)
  content.appendChild(p)
  content.appendChild(button)
  divIcon.appendChild(icon)
  icon.appendChild(faIcon)
  
  document.body.appendChild(overlay)

  
}
*/
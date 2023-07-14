let themeButton = document.getElementById("theme-button");


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here

const signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {

  const element = document.querySelector('.signatures');
  const signs = document.createElement("p")
  signs.textContent = "🖊️ " + person.name + " from " + person.local + " supports this!"
  
  element.appendChild(signs);
  toggleModal(person);
}


const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-content-modal");
  modal.style.display = "flex";  
  modalContent.textContent = `Thanks, ${person.name}!`;
  
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    clearInterval(intervalId);
  modal.style.display = "none";
  }, 4000)
}

  
let scaleFactor = 1;
const modalImage = document.getElementById('modal-image');
const scaleImage = () => {
        if (scaleFactor === 1) 
        {
        scaleFactor = 0.8;
        } 
        else 
        {
        scaleFactor = 1;
        }
  modalImage.style.transform = `scale(${scaleFactor})`;
}
setInterval(scaleImage, 500);

// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    local: petitionInputs[1].value
      }

    // TODO: Loop through all inputs
  
    for (let i = 0; i < petitionInputs.length; i++) 
    {
      if (person.name.length < 2) 
      {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      }
      else 
      {
      petitionInputs[i].classList.remove('error');
      }

      if (person.local.length<2)
      {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      }
      else
      {
        petitionInputs[i].classList.remove('error');
      }
    }
  
    if (containsErrors==false) 
    {
      addSignature(person);
      for (let i=0; i < petitionInputs.length; i++) 
      {
        petitionInputs[i].value = "";
        containsErrors = false;
      }
      
    }
}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 75,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',  
}

const revealableContainers = document.querySelectorAll('.revealable')

const reveal = () => {

for (let i=0; i< revealableContainers.length; i++)
  {
    let windowHeight = window.innerHeight;
    
    let topOfRevealableContainer= revealableContainers[i].getBoundingClientRect().top;
    
          if (topOfRevealableContainer < windowHeight - animation.revealDistance) 
          {
            revealableContainers[i].classList.add('active')
        /* add the active class to the revealableContainer's classlist */
          } 
          else 
          {
            revealableContainers[i].classList.remove('active')
        /* remove the active class to the revealableContainer's classlist */
          }
  }
}
window.addEventListener('scroll', reveal)



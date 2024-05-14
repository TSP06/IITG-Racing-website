function toggleMenu(){
    const menu=document.querySelector('.menu');
    const nav=document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function changeTextLetter(event) {
  let iteration = 0;

  // get initial text
  const initText = event.target.innerText;

  // clear previous interval
  clearInterval(interval);

  // set interval to change text letter by letter 
  interval = setInterval(() => {
    event.target.innerText = initText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.textValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= event.target.dataset.textValue.length) {
      clearInterval(interval);
    }

    // increase iteration
    iteration += 1 / 10;
  }, 50);
}

const animTexts = document.querySelectorAll(".animated-text");

animTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    changeTextLetter(event);
  });
});





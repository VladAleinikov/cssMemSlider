let memes = [...document.querySelectorAll(".img")];
let signatures = [...document.querySelectorAll(".signature")];
let buttons = [...document.querySelectorAll(".button")];

buttons.forEach(e => {
      e.addEventListener("click", ev => {

            let id = e.getAttribute("num");
            for (let i = 0; i < memes.length; i++) {
                  memes[i].style.left = (-100 * id) + "%";
                  signatures[i].style.left = (-100 * id) + "%";
                  buttons[i].classList.remove("active");
            }
            e.classList.add("active");
      })
});


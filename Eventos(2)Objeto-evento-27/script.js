const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

/* input.addEventListener("keyup", (e) => {
    console.log(e);
}); */

/* button.addEventListener('click', (e) => {
    console.log(e.target);
}) */

/* const gallery = document.getElementById("gallery");

gallery.addEventListener("click", (e) => {
  e.target.classList.add("red");
}); */

const link = document.getElementById("link");

link.addEventListener("click", (e) => {
    e.preventDefault()
    button.click()
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Se ha enviado el formulario");
});

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})

button.click()
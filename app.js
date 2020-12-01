//Movement to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker");
const purchase = document.querySelector(".purchase");
const info = document.querySelector(".description");
const sizes = document.querySelector(".sizes");
const shoe = document.querySelector(".shoe");

//Eventlisteners
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";
  title.style.transition = "all 0.5s ease";
  shoe.style.transition = "all 0.5s ease";
  info.style.transition = "all 0.5s ease";
  title.style.transform = "translateZ(0px)";
  info.style.transform = "translateZ(0px)";
  shoe.style.transform = "translateZ(0px)";
});

//Animate in

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transition = "none";
  shoe.style.transition = "none";
  info.style.transition = "none";
  //popout
  title.style.transform = "translateZ(150px)";
  info.style.transform = "translateZ(150px)";
  shoe.style.transform = "translateZ(150px)";
});

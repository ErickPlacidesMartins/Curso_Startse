const main = document.querySelector(".main");
const enemy = document.querySelector(".enemy-game");

const jump = () => {
  main.classList.add("jump-main");

  setTimeout(() => {
    main.classList.remove("jump-main");
  }, 820);
};  

const loopGame = setInterval(() => {
  const enemyPosition = enemy.offsetLeft;
  const mainPosition = +window
    .getComputedStyle(main)
    .bottom.replace("px", "");

  if (enemyPosition <= 120 && enemyPosition > 0 && mainPosition < 80) {
    enemy.style.animation = "none";
    enemy.style.left = `${enemyPosition}px`;

    main.style.animation = "none";
    main.style.bottom = `${mainPosition}px`;

    main.src = "./Images/colisao.gif";
    main.style.width = "99px";
    main.style.marginLeft = "50px";

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);      

function home() {
  //   console.log(`I'm from Home Page.`);

  const contaienr = document.querySelector("#content");
  function createElement() {
    const element = document.createElement("div");
    element.classList = "mainContainerHome";

    const herotag = document.createElement("h1");
    herotag.classList = "heroTag";
    herotag.textContent = `More than just a meal, it's an experience. Come hungry, leave happy.`;

    element.appendChild(herotag);

    const ptag = document.createElement("p");
    ptag.classList = "ptag";
    ptag.textContent = "Good Food, Good Life.";

    element.appendChild(ptag);

    const hungerBtn = document.createElement("button");
    hungerBtn.classList = "hngrBtn";
    hungerBtn.textContent = "I'm Hungry";

    element.appendChild(hungerBtn);

    return element;
  }

  contaienr.appendChild(createElement());
}

function hungryBtn() {
  return document.querySelector(".hngrBtn");
}

export { home, hungryBtn };

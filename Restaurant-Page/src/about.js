function contect() {
  console.log(`I'm from Contect Page.`);

  const contaienr = document.querySelector("#content");

  const content = document.createElement("div");
  content.textContent =
    `At BISTRO, we believe in the simple truth that exceptional ingredients lead to exceptional flavors. That's why we source our ingredients locally whenever possible, partnering with farmers and producers who share our passion for quality and sustainability. Every bite of your meal is a testament to our commitment to using the freshest, most flavorful ingredients available.`;
  content.classList = "aboutContent"
  contaienr.appendChild(content)
}

export default contect;

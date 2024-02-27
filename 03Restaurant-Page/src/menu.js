class MenuItems {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
const item1 = new MenuItems("Bufflo Wings", "400", "Appetizer");
const item2 = new MenuItems("Potato Cheese Ball", "400", "Appetizer");
const item3 = new MenuItems("Chicken Bumpling", "400", "Appetizer");
const item4 = new MenuItems("Chicken Hatosi", "400", "Appetizer");
const item5 = new MenuItems("BBQ Wings", "400", "Appetizer");

const item6 = new MenuItems("Mutton Chops", "3000", "Grill");
const item7 = new MenuItems("Malai Tikka Boti", "3000", "Grill");
const item8 = new MenuItems("Achari Tikka Boti", "3600", "Grill");
const item9 = new MenuItems("Chicken Tikka", "2699", "Grill");
const item10 = new MenuItems("Chicken Kabab", "900", "Grill");
const item11 = new MenuItems("Chatkhara Tikka Boti", "800", "Grill");

const item12 = new MenuItems("Shahi Dall", "350", "Vegetarian");
const item13 = new MenuItems("Dall Mash", "350", "Vegetarian");
const item14 = new MenuItems("Muglai Bhujia", "350", "Vegetarian");
const item15 = new MenuItems("Palak Paneer", "350", "Vegetarian");
const item16 = new MenuItems("Qeema Karela", "350", "Vegetarian");
const item17 = new MenuItems("Behndi Piaaz Masala", "350", "Vegetarian");

let itemsArray = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
];

function menu() {
  console.log(`I'm from Menu Page.`);

  const contaienr = document.querySelector("#content");
  contaienr.innerHTML = "";

  function createElement() {
    const contentContaier = document.createElement("div");
    contentContaier.classList = "menuContainer";

    const AppetizerDiv = document.createElement("div");
    AppetizerDiv.classList = `Appetizer contaienrName`;

    const GrillDiv = document.createElement("div");
    GrillDiv.classList = `Grill contaienrName`;

    const VegetarianDiv = document.createElement("div");
    VegetarianDiv.classList = `Vegetarian contaienrName`;

    function sectionName(name) {
      const div = document.createElement("div");
      div.textContent = name;
      div.classList = "sectionName";

      return div;
    }

    AppetizerDiv.appendChild(sectionName("APPETIZER"));
    GrillDiv.appendChild(sectionName("GRILL"));
    VegetarianDiv.appendChild(sectionName("VEGETARIAN"));
    contentContaier.append(AppetizerDiv, GrillDiv, VegetarianDiv);

    itemsArray.forEach((dish) => {
      const nameTag = document.createElement("p");
      nameTag.classList = "nameTag";
      nameTag.textContent = dish.name;

      const priceTag = document.createElement("p");
      priceTag.classList = "priceTag";
      priceTag.textContent = `${dish.price}/Rs`;

      const microDiv = document.createElement("div");
      microDiv.classList = "microDiv";
      microDiv.append(nameTag, priceTag);

      if (dish.category === "Appetizer") {
        AppetizerDiv.appendChild(microDiv);
      } else if (dish.category === "Grill") {
        GrillDiv.appendChild(microDiv);
      } else if (dish.category === "Vegetarian") {
        VegetarianDiv.appendChild(microDiv);
      }
    });

    return contentContaier;
  }

  contaienr.appendChild(createElement());
}

export default menu;

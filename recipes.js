let arr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

// this function will helps us to create the card
function cardCreater(foodCard) {
  let cardDiv = document.createElement("div");
  let image = document.createElement("img");
  image.style.width = "289px";
  image.style.height = "200px";
  image.style.overflow = "hidden";
  image.src = foodCard.imageSrc;
  cardDiv.appendChild(image);

  let nameAndRatigDiv = document.createElement("div");
  nameAndRatigDiv.style.display = "flex";
  nameAndRatigDiv.style.justifyContent = "space-between";
  let name = document.createElement("p");
  name.innerText = foodCard.name;
  name.innerText = foodCard.name;
  name.style.fontFamily = "Integer";
  name.style.fontSize = "20px";
  name.style.fontWeight = "700";
  name.style.lineHeight = "24px";
  name.style.letterSpacing = "0em";
  name.style.textAlign = "left";

  let h5 = document.createElement("h5");
  h5.innerText = foodCard.rating;
  nameAndRatigDiv.appendChild(name);
  nameAndRatigDiv.appendChild(h5);
  cardDiv.appendChild(nameAndRatigDiv);

  let timeDiv = document.createElement("div");
  let time = document.createElement("p");
  time.innerText = foodCard.time;
  time.style.color = "red";
  let like = document.createElement("button");
  like.style.border = "none";
  like.innerHTML = '<i class="fa-regular fa-heart"></i>';
  like.addEventListener =
    ("click",
    () => {
      console.log(1);
      like.style.backgroundColor = "red";
    });
  let e = document.createElement("h5");
  e.innerHTML = '<i class="fa-regular fa-comment"></i>';
  timeDiv.appendChild(time);
  timeDiv.appendChild(like);
  timeDiv.appendChild(e);
  timeDiv.style.display = "flex";
  timeDiv.style.justifyContent = "space-between";
  timeDiv.style.alignItems = "center";
  timeDiv.style.height = "fit-content";
  cardDiv.appendChild(timeDiv);

  return cardDiv;
}

let storage = document.getElementById("cards");
removeAllTheChildrens();
let childDiv = document.createElement("div");
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  if (arr[i].rating >= 4) {
    if (childDiv.children.length == 3) {
      storage.appendChild(childDiv);
      childDiv.style.display = "flex";
      childDiv.style.gap = "20px";
      childDiv = document.createElement("div");
    }
    let curCard = cardCreater(arr[i]);
    childDiv.appendChild(curCard);
  }
}
if (childDiv.children.length < 3) {
  storage.appendChild(childDiv);
  childDiv.style.display = "flex";
  childDiv.style.gap = "20px";
  childDiv = document.createElement("div");
}

function getAbove4Star(AboveFour) {
  AboveFour.classList.toggle("active-option");
  let storage = document.getElementById("cards");
  removeAllTheChildrens();
  let classList = AboveFour.classList;
  let childDiv = document.createElement("div");
  if (classList.contains("active-option")) {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      if (arr[i].rating >= 4) {
        if (childDiv.children.length == 3) {
          storage.appendChild(childDiv);
          childDiv.style.display = "flex";
          childDiv.style.gap = "20px";
          childDiv = document.createElement("div");
        }
        let curCard = cardCreater(arr[i]);
        childDiv.appendChild(curCard);
      }
    }
    if (childDiv.children.length < 3) {
      storage.appendChild(childDiv);
      childDiv.style.display = "flex";
      childDiv.style.gap = "20px";
      childDiv = document.createElement("div");
    }
  } else {
    let first = document.getElementById("cards");
    let classes = first.children;
    for (let i = 0; i < classes.length; i++) {
      classes[i].remove();
    }
  }
}
function getBellow4star(bellowFourStart) {
  bellowFourStart.classList.toggle("active-option");
  let storage = document.getElementById("cards");
  removeAllTheChildrens();
  let classList = bellowFourStart.classList;
  let childDiv = document.createElement("div");
  if (classList.contains("active-option")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].rating < 4) {
        console.log(i);
        if (childDiv.children.length == 3) {
          storage.appendChild(childDiv);
          childDiv.style.display = "flex";
          childDiv.style.gap = "20px";
          childDiv = document.createElement("div");
        }
        let curCard = cardCreater(arr[i]);
        childDiv.appendChild(curCard);
      }
    }
    if (childDiv.children.length < 3) {
      storage.appendChild(childDiv);
      childDiv.style.display = "flex";
      childDiv.style.gap = "20px";
      childDiv = document.createElement("div");
    }
  } else {
    let first = document.getElementById("cards");
    let classes = first.children;
    for (let i = 0; i < classes.length; i++) {
      classes[i].remove();
    }
  }
}

function allRecipes() {
  let storage = document.getElementById("cards");
  let childDiv = document.createElement("div");
  removeAllTheChildrens();
  for (let i = 0; i < arr.length; i++) {
    if (childDiv.children.length == 3) {
      storage.appendChild(childDiv);
      childDiv.style.display = "flex";
      childDiv.style.gap = "20px";
      childDiv = document.createElement("div");
    }
    let curCard = cardCreater(arr[i]);
    childDiv.appendChild(curCard);
  }
  if (childDiv.children.length < 3) {
    storage.appendChild(childDiv);
    childDiv.style.display = "flex";
    childDiv.style.gap = "20px";
    childDiv = document.createElement("div");
  }
}

function allVegRecipes() {
  let storage = document.getElementById("cards");
  let childDiv = document.createElement("div");
  removeAllTheChildrens();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type == "veg") {
      if (childDiv.children.length == 3) {
        storage.appendChild(childDiv);
        childDiv.style.display = "flex";
        childDiv.style.gap = "20px";
        childDiv = document.createElement("div");
      }
      let curCard = cardCreater(arr[i]);
      childDiv.appendChild(curCard);
    }
  }
  if (childDiv.children.length < 3) {
    storage.appendChild(childDiv);
    childDiv.style.display = "flex";
    childDiv.style.gap = "20px";
    childDiv = document.createElement("div");
  }
}

function removeAllTheChildrens() {
  const list = document.getElementById("cards");
  if (list.hasChildNodes()) {
    list.removeChild(list.children[0]);
  }
}

function allNoVegRecipes() {
  let storage = document.getElementById("cards");
  let childDiv = document.createElement("div");
  removeAllTheChildrens();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type == "non-veg") {
      if (childDiv.children.length == 3) {
        storage.appendChild(childDiv);
        childDiv.style.display = "flex";
        childDiv.style.gap = "20px";
        childDiv = document.createElement("div");
      }
      let curCard = cardCreater(arr[i]);
      childDiv.appendChild(curCard);
    }
  }
  if (childDiv.children.length < 3) {
    storage.appendChild(childDiv);
    childDiv.style.display = "flex";
    childDiv.style.gap = "20px";
    childDiv = document.createElement("div");
  }
}

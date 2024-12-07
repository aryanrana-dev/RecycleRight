let p = document.querySelector("#result");
let inp = document.querySelector("#inp");
let btn = document.querySelector("button");
let notFound = "Sorry, this item is not found in our database";
const recyclingInfo = {
  "plastic bottle": "Recycle in the plastics bin.",
  "aluminum can": "Recycle in the metals bin.",
  "glass jar": "Recycle in the glass bin.",
  "banana peel": "Compost it.",
  "food wrapper": "Dispose of in the trash.",
  paper: "Recycle in the paper bin.",
  cardboard: "Recycle in the paper bin.",
  "used battery": "Dispose of in a hazardous waste bin.",
  "old electronics": "Take to an electronic waste recycling facility.",
  styrofoam: "Dispose of in the trash.",
  "cigarette butts": "Dispose of in the trash.",
  "plastic bag":
    "Recycle at designated drop-off locations or dispose in the trash.",
  newspaper: "Recycle in the paper bin.",
  magazines: "Recycle in the paper bin.",
  "tissue paper": "Dispose of in the trash.",
  clothing: "Donate or recycle at designated textile recycling bins.",
  "used motor oil": "Dispose of at a special recycling center.",
  shoes: "Donate or recycle at designated bins.",
  "toothpaste tube":
    "Recycle if made of recyclable materials, otherwise dispose of in the trash.",
  "pizza box": "Recycle if clean; otherwise dispose of in the trash.",
  microwave: "Take to an electronic waste recycling facility.",
  "broken furniture": "Donate if usable or dispose of properly.",
};
function getRecyclingInfo(item) {
  return recyclingInfo[item.toLowerCase().trim()] || notFound;
}
inp.addEventListener("keypress", function(el) {
  if(el.key=="Enter") {
    btn.click();
  }
})
btn.addEventListener("click", function () {
  let item = inp.value;
  let info = getRecyclingInfo(item);
  if (item.trim() == "") {
    p.innerText = "Enter a valid item";
    p.classList.add("empty");
  } else {
    p.innerText = info;
    if (p.innerText === notFound) {
      p.classList.add("empty");
    } else {
      p.classList.add("info");
      p.classList.remove("empty");
    }
  }
});

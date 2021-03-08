function create(words) {
  let contentElement = document.getElementById("content");

  words.forEach((element) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element;
    p.style.display = "none";

    div.addEventListener("click", () => {
      p.style.display = "block";
    });
    div.appendChild(p);
    contentElement.appendChild(div);
  });
}

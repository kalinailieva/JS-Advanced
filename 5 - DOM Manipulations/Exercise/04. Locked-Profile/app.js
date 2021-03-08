function lockedProfile() {
  let buttons = document.getElementsByTagName("button");
  Array.from(buttons).map((b) =>
    b.addEventListener("click", (b) => proceedingProfile(b))
  );

  function proceedingProfile(b) {
    let currentButton = b.target;
    let unlock = currentButton.parentElement.children[4];
    let lock = currentButton.parentElement.children[2];
    console.log(unlock);
    let hiddenInfoElement = currentButton.parentElement.children[9];

    if (unlock.checked === true) {
      if (currentButton.textContent !== "Hide it") {
        hiddenInfoElement.style.display = "block";
        currentButton.textContent = "Hide it";
        unlock.checked = false;
        lock.checked = true;
      } else {
        hiddenInfoElement.style.display = "none";
      }
    }
  }
}

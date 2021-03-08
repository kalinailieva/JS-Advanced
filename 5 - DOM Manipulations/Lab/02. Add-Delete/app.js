function addItem(e) {
  let inputElement = document.getElementById("newText");
  let inputElementValue = inputElement.value;

  let newElement = document.createElement("li");
  newElement.innerHTML = `${inputElementValue} `;

  //create delete alement and set functionallity
  let deleteElement = document.createElement('span');
  deleteElement.innerText = '[Delete]';
  //do a hand-coursor
  deleteElement.style.cursor = 'pointer';
  deleteElement.style.textDecoration = 'underline'
 


  deleteElement.addEventListener('click', function(e){
    let parent = e.target.parentElement;
    parent.remove();
})
//append new element on DOM
  newElement.appendChild(deleteElement);
  document.getElementById('items').appendChild(newElement);
  inputElement.value = '';


}



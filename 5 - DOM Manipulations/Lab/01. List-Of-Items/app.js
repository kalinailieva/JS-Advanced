function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputValue = inputElement.value;

    let newElement = document.createElement('li');

    newElement.textContent = inputValue;
    document.getElementById('items').appendChild(newElement);
    
    inputElement.value = '';
}
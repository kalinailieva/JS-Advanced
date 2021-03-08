function encodeAndDecodeMessages() {
    let inputMessegeElement = document.querySelector('#main > div:nth-child(1) > textarea');
    let sendButton = document.querySelector('#main > div:nth-child(1) > button');
    
    let outputMessegeElement = document.querySelector('#main > div:nth-child(2) > textarea');
    let decodeButton = document.querySelector('#main > div:nth-child(2) > button');
    let outputText = [];

    sendButton.addEventListener('click', function(){
        let inputText = inputMessegeElement.value;
        let outputText = [];
        for (let index = 0; index < inputText.length; index++) {
            const element = String.fromCharCode((inputText.charCodeAt(index))+1);
            outputText.push(element);
        }
        outputMessegeElement.placeholder= outputText.join('');
    });
    let decodedText = '';
    decodeButton.addEventListener('click', function(){
        let text = outputText.join('');
        for (let index = 0; index < text.length; index++) {
            const element = String.fromCharCode((text.charCodeAt(index))-1);
            decodedText += element;
        }
        console.log(decodedText);
    
});
}
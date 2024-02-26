let listOfDrawnNumbers = [];//Lista vazia
let limitNumber = 100;
let secretNumber = randomNumber();
let attempts = 1;

function displayTextOnScreen(tag, text) {
    let tagHtml = document.querySelector(tag);
    tagHtml.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female',{rate:1});//Voz de leitura de texto 
}

function displayInitialMessage(){
    displayTextOnScreen('h1', `Secret Number Game`);//Executando a função
    displayTextOnScreen('p', `Choose a number between 1 to 100:`);
}

displayInitialMessage()

function checkChoose() {
    let userChoice = document.querySelector('input').value;//Pegando apenas o valor da tag "input"

    if(userChoice == secretNumber){
        let attemptWord = attempts > 1 ? `attempts` : `attempt`;
        //Na linha abaixo chama a primeira função feita!!!
        displayTextOnScreen('p', `The secret number is ${secretNumber}. You guessed the secret number after ${attempts} ${attemptWord}. Congratulations!`);

        //O botão "Nw game" só será hábilitado se "userChoise" for igual a "secretNumber"
        document.getElementById('reiniciar').removeAttribute('disabled');//Pegar a tag "Button" com id e removendo o atributo "disable"

    } else if(userChoice > secretNumber){
        displayTextOnScreen('p', `The secret number is less than ${userChoice}!`);
    } else if(userChoice < secretNumber){
        displayTextOnScreen('p', `The secret number is more than ${userChoice}!`);
    }

    //attmpts = attempts + 1;
    attempts++;
    clearUserInput();
}

function randomNumber(){
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberOfElementsInTheList = listOfDrawnNumbers.length;

    if(numberOfElementsInTheList == limitNumber){
        listOfDrawnNumbers = []; //Esvaziou a lista de números sorteados.
    }
    
    if(listOfDrawnNumbers.includes(chosenNumber)){//"includes" é uma função que verifica se o número está na lista.Se tiver retorna "true", sendo feita outra ação. 
        return randomNumber();//recurção -> retorna a própria função.
    } else{
        listOfDrawnNumbers.push(chosenNumber);//"push" -> adiciona elementos no final da lista.
        //console.log(listOfDrawnNumbers);
        return chosenNumber;
    }
}
//console.log(secretNumber);

function clearUserInput(){//Função para deixar o campo (input) vazio.
    userChoice = document.querySelector('input'); //Aqui não vou pegar o valor, somente a tag "input"
    userChoice.value = '';
}

function newGame(){
    secretNumber = randomNumber();
    clearUserInput();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true); //Rehabilitando o botão "New game", colocando o "true"
}
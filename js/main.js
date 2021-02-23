//constant values
const boxLookup = {     //they are not part of state and always constant values
    cherry: {           //we always put here rules and image that never changing
        imageUrl: 'imgs/cherry.png',
   
    },
    lemon: {
        imageUrl: 'imgs/lemon.png',
        
    },
    watermelon: {
        imageUrl: 'imgs/watermelon.png',
        
    }
}

//state variables. The things that will change 
let choices; //cherry, lemon, watermelon

const choicesEl = {
    
        boxOne: {
        
            imgEl: document.querySelector('#oneResult img')
        },
        boxTwo: {
           
            imgEl: document.querySelector('#twoResult img')
        },
        boxThree: {
            
            imgEl: document.querySelector('#threeResult img')
        }
    }

//event listener
document.querySelector('button')
    .addEventListener('click', playRound);
     

init()

function init(){
//initialize choices
    choices = {
        boxOne: 'lemon',
        boxTwo: 'lemon',
        boxThree: 'lemon'
    }

    render()
}

function render(){  //apply initial state variables to view/dom
    console.log('render is firing')

    for (let choice in choices){

        choicesEl[choice].imgEl.src = boxLookup[choices[choice]].imageUrl
    }

}

function playRound(){
    console.log('button click is working')
    
    choices.boxOne = getRandomBox();
    choices.boxTwo = getRandomBox();
    choices.boxThree = getRandomBox();

    if (choices.boxOne === choices.boxTwo && choices.boxOne === choices.boxThree){
        document.querySelector('h1').textContent = 'You have won'
    
    } else{
        document.querySelector('h1').textContent = 'Slot Machine'
    }

    render();

}

function getRandomBox() {
    const outcomes = ['cherry', 'lemon', 'watermelon']
    const randomValue = Math.floor(Math.random() * 3)
    return outcomes[randomValue]
}


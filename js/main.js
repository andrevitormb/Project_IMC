import {Modal} from "./modal.js";
import {AlertError} from "./error.js";
import{IMC , notANumber} from "./utils.js";

//variables

const form =  document.querySelector('form');
const inputWeight = form.querySelector('#weight');
const inputHeight = form.querySelector('#height');



form.onsubmit = event => {
        event.preventDefault();
        const weight = inputWeight.value;
        const height = inputHeight.value;
    
        const result = IMC(weight, height)
       
        const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

        if(weightOrHeightIsNotANumber){
            AlertError.open()
            return;
        }
        AlertError.close()
        
        displayResultMessage(result)
        
    }   

function displayResultMessage(result) {
    Modal.open()
    Modal.Message.innerText = `Seu IMC é de ${result}`

//Clear inputs 
    inputWeight.value = ""
    inputHeight.value = ""

}



//Clear Message Error. 
inputHeight.oninput = () => {
    AlertError.close()
}
inputWeight.oninput = () => {
    AlertError.close()
}
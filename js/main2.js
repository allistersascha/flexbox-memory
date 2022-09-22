//create the array
styleArray = ['flex1', 'flex2', 'flex3', 'flex4', 'flex5', 'flex6', 'flex7', 'flex8', 'flex9', 'flex10', 'flex11', 'flex12', 'flex13', 'flex14', 'flex15', 'flex16', 'flex17', 'flex18', 'flex19', 'flex20', 'flex21', 'flex22', 'flex23', 'flex24']

//create the functions -- which of these are redundant?
function flex1(){
    document.querySelector('.lDiv').style = 'align-content: space-around'
    document.querySelector('#showAnswer').innerText = 'align-content: space-around'
}
function flex2(){
    document.querySelector('.lDiv').style = 'align-content: space-between'
    document.querySelector('#showAnswer').innerText = 'align-content: space-between'
}
function flex3(){
    document.querySelector('.lDiv').style = 'align-content: stretch'
    document.querySelector('#showAnswer').innerText = 'align-content: stretch'
}
function flex4(){
    document.querySelector('.lDiv').style = 'align-content: stretch'
    document.querySelector('#showAnswer').innerText = 'align-content: stretch'
}
function flex5(){
    document.querySelector('.lDiv').style = 'align-content: center'
    document.querySelector('#showAnswer').innerText = 'align-content: center'
}
function flex6(){
    document.querySelector('.lDiv').style = 'align-content: flex-end'
    document.querySelector('#showAnswer').innerText = 'align-content: flex-end'
}
function flex7(){
    document.querySelector('.lDiv').style = 'align-content: flex-end'
    document.querySelector('#showAnswer').innerText = 'align-content: flex-end'
}
function flex8(){
    document.querySelector('.lDiv').style = 'align-content: flex-start'
    document.querySelector('#showAnswer').innerText = 'align-content: flex-start'
}
function flex9(){
    document.querySelector('.lDiv').style = 'align-items: baseline'
    document.querySelector('#showAnswer').innerText = 'align-items: baseline'
}
function flex10(){
    document.querySelector('.lDiv').style = 'align-items: stretch'
    document.querySelector('#showAnswer').innerText = 'align-items: stretch'
}
function flex11(){
    document.querySelector('.lDiv').style = 'align-items: stretch'
    document.querySelector('#showAnswer').innerText = 'align-items: stretch'
}
function flex12(){
    document.querySelector('.lDiv').style = 'align-items: center'
    document.querySelector('#showAnswer').innerText = 'align-items: center'
}
function flex13(){
    document.querySelector('.lDiv').style = 'align-items: flex-end'
    document.querySelector('#showAnswer').innerText = 'align-items: flex-end'
}
function flex14(){
    document.querySelector('.lDiv').style = 'align-items: flex-start'
    document.querySelector('#showAnswer').innerText = 'align-items: flex-start'
}
function flex15(){
    document.querySelector('.lDiv').style = 'justify-content: space-evenly'
    document.querySelector('#showAnswer').innerText = 'justify-content: space-evenly'
}
function flex16(){
    document.querySelector('.lDiv').style = 'justify-content: space-around'
    document.querySelercto('#showAnswer').innerText = 'justify-content: space-around'
}
function flex17(){
    document.querySelector('.lDiv').style = 'justify-content: space-between'
    document.querySelector('#showAnswer').innerText = 'justify-content: space-between'
}
function flex18(){
    document.querySelector('.lDiv').style = 'justify-content: center'
    document.querySelector('#showAnswer').innerText = 'justify-content: center'
}
function flex19(){
    document.querySelector('.lDiv').style = 'justify-content: flex-end'
    document.querySelector('#showAnswer').innerText = 'justify-content: flex-end'
}
function flex20(){
    document.querySelector('.lDiv').style = 'justify-content: flex-start'
    document.querySelector('#showAnswer').innerText = 'justify-content: flex-start'
}
function flex21(){
    document.querySelector('.lDiv').style = 'flex-direction: column-reverse'
    document.querySelector('#showAnswer').innerText = 'flex-direction: column-reverse'
}
function flex22(){
    document.querySelector('.lDiv').style = 'flex-direction: column'
    document.querySelector('#showAnswer').innerText = 'flex-direction: column'
}
function flex23(){
    document.querySelector('.lDiv').style = 'flex-direction: row'
    document.querySelector('#showAnswer').innerText = 'flex-direction: row'
}
function flex24(){
    document.querySelector('.lDiv').style = 'flex-direction: row-reverse'
    document.querySelector('#showAnswer').innerText = 'flex-direction: row-reverse'
}

//hint button toggles showing the answer by toggling the id showAnswer
function hint(){
    document.querySelector('#showAnswer').classList.toggle ('hidden')
}
//declare a function
function randomFunction(input_array){

    //declare a variable to set the upper bound of the array
    max = input_array.length;

    //declare a variable to pull an index randomly from the array. What is Math.flor? What is Math.random? Why is it multiplied by max?
    randomIndex = Math.floor((Math.random() * max));

    //declare a variable that records the result
    result = input_array[randomIndex];

    //return the result
    return result;
}

//call the function using the returned index result -- how could this be written differently?
function callAFunction(function_name){
    if (function_name == 'flex1'){
        flex1();
    }
    if (function_name == 'flex2'){
        flex2();
    }
    if (function_name == 'flex3'){  
        flex3();
    }
    if (function_name == 'flex4'){  
        flex4();
    }
    if (function_name == 'flex5'){  
        flex5();
    }
    if (function_name == 'flex6'){  
        flex6();
    }
    if (function_name == 'flex7'){  
        flex7();
    }
    if (function_name == 'flex8'){  
        flex8();
    }
    if (function_name == 'flex9'){  
        flex9();
    }
    if (function_name == 'flex10'){  
        flex10();
    }
    if (function_name == 'flex11'){  
        flex11();
    }
    if (function_name == 'flex12'){  
        flex12();
    }
    if (function_name == 'flex13'){  
        flex13();
    }
    if (function_name == 'flex14'){  
        flex14();
    }
    if (function_name == 'flex15'){  
        flex15();
    }
    if (function_name == 'flex16'){  
        flex16();
    }
    if (function_name == 'flex17'){  
        flex17();
    }
    if (function_name == 'flex18'){  
        flex18();
    }
    if (function_name == 'flex19'){  
        flex19();
    }
    if (function_name == 'flex20'){  
        flex20();
    }
    if (function_name == 'flex21'){  
        flex21();
    }
    if (function_name == 'flex22'){  
        flex22();
    }
    if (function_name == 'flex23'){  
        flex23();
    }
    if (function_name == 'flex24'){  
        flex24();
    }
}

//break the following down with pseudo code: what is happening in this function?

function main(){
    randomString = randomFunction(styleArray);
    callAFunction(randomString);
    document.getElementById('#answer').display.class = "hidden"
}

//add an eventListener to call a random function (main)
document.querySelector('#question').addEventListener ('click', main)

//add an eventListener to toggle the style of #showAnswer
document.querySelector('#answer').addEventListener('click', hint)
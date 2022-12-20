const btnNumbers =  document.querySelectorAll('.btn-number');
const currScreen = document.getElementById('currentScreen');
const lastScreen = document.getElementById('lastScreen');
const clearBtn = document.getElementById("clearBtn");
const operatorBtns = document.querySelectorAll('.btn-operator');
const equalBtn = document.getElementById("btnEqual");
const dotBtn = document.getElementById("btnDot");
const delBtn = document.getElementById("delBtn");


let arr =[];
let apa;

console.log(apa);
function appendNumber(number){
    if(currScreen.textContent === "0"){
        currScreen.textContent = number;
    }else{
        currScreen.textContent = currScreen.textContent + number;
    }
}

function clear(){
    currScreen.textContent = "0";
    arr = [];
    lastScreen.textContent= " ";

}


function equalProses(){
    let value = operate (arr[1],Number(arr[0]), Number(arr[2]));
    let screen = arr.join(" ") + (" =");
    currScreen.textContent=value;
    lastScreen.textContent= screen;
    arr[0] = currScreen.textContent;
}

function operatorProses(content){
    arr.push(currScreen.textContent);   
    if(arr.length == 3){
        let val = operate (arr[1],Number(arr[0]), Number(arr[2]));
        arr = [];
        arr.push(val);
    }
    arr.push(content);
    lastScreen.textContent = arr.join(' ');
    currScreen.textContent = "0";

    console.log(arr);
}

function add(num1, num2){
    return num1+num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiplication(num1,num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2){
    if(operator == "+"){
        return add(num1, num2);
    }
    else if(operator == "-"){
        return substract(num1, num2);
    }
    else if(operator == "/"){
        return division(num1, num2);
    }
    else if(operator == "x"){
        return multiplication(num1, num2);
    }
}



btnNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        appendNumber(btn.textContent);
    });
});

clearBtn.addEventListener("click", () => {
    clear();
});

delBtn.addEventListener("click", () => {
    let currScreenText = currentScreen.textContent;
    currentScreen.textContent=currScreen.textContent.substring(0, currScreenText.length-1);
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if(arr.length < 3){
            if(currScreen.textContent == "0"){
                arr[arr.length-1] = operatorBtn.textContent;
                lastScreen.textContent = arr.join(' ');
            }
            else{
                operatorProses(operatorBtn.textContent);
            }
        }
        else if(arr.length >=3){
            arr = [];
            operatorProses(operatorBtn.textContent);
        }
    });
});

equalBtn.addEventListener("click", () => {
    if(arr.length==2){
        arr.push(currScreen.textContent);
        equalProses();
    }else if(arr.length==3){
        equalProses();
    }
})

dotBtn.addEventListener("click", () => {
    currScreen.textContent=currScreen.textContent + ".";
})

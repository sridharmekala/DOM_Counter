let counter = document.getElementById("counter");
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");

let count = 0;
function onInBtn() {
    count+=1;
    counter.textContent = count;
}

function reSetBtn() {
    count = 0
    counter.textContent = count;

}

function onDecBtn() {

    if(count > 0){
         count--;
    }
        
    counter.textContent = count;
}

function onInBtn1() {
    count+=1;
    counter1.textContent = count;
}

function reSetBtn1() {
    count = 0
    counter1.textContent = count;

}

function onDecBtn1() {

    if(count > 0){
         count--;
    }
        
    counter1.textContent = count;
}

function onInBtn2() {
    count+=1;
    counter2.textContent = count;
}

function reSetBtn2() {
    count = 0
    counter2.textContent = count;

}

function onDecBtn2() {

    if(count > 0){
         count--;
    }
        
    counter2.textContent = count;
}
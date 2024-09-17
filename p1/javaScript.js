//now we are going to increment the value of the passenger counter when the button is clicked
let count=0
// let add = document.getElementById("count-passenger")
//   we can write it this way
// console.log(add) //only to confirm that the code run is successful without any bugs
let counter=document.getElementById("count-passenger")
function add() {
    count+=1
    // add.innerText=count but  write it like below statement
    counter.innerText=count

}

function sub() {
    if(count>0) {
        count-=1
    }
    else {
        count=0
    }
    document.getElementById("count-passenger").innerText=count
}

let saver=document.getElementById("saves")
function save() {
    saver.innerText+=' '+count+' - '
}

function clr() {
    count=0
    document.getElementById("count-passenger").innerText=count
}


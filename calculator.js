function takeinput(newvalue){
    document.getElementById("display").value += newvalue;
}

function clearinput(){
    document.getElementById("display").value = " ";
}

function result(){
    let result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result)
}

// let text = "connect shiksha"

// console.log(text);
function deletelast(){
    let result = document.getElementById("display").value;
    document.getElementById("display").value = result.slice(0,-1)

}
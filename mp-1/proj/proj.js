//Adds two numbers
function addition(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first + second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

//Subtracts two numbers
function subtraction(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first - second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

//Multiplies two numbers
function multiplication(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first*second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

//Divides two numbers
function division(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first/second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

//Brings the first number to the power of the second number
function power(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = 1;

    for(let i = 0; i < second; i++){
        output = first * output;
    }
    
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

//Erases what's in the inputs and output
function clearEverything(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}

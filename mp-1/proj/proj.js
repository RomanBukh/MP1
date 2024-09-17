function addition(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first + second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

function subtraction(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first - second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

function multiplication(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first*second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

function division(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let output = first/second;
    document.getElementById("output").innerHTML = `<p>${output}</p>`;
}

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

function clear(){
    document.getElementById("first").innerHTML = ``;
    document.getElementById("second").innerHTML = ``;
    document.getElementById("output").innerHTML = ``;
}
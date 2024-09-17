function addition(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);
}

function subtraction(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);
}

function multiplication(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);
}

function division(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);
}

function power(){
    let first=document.getElementById("first").value;
    first=Number(first);

    let second=document.getElementById("second").value;
    second=Number(second);

    let j = 1;

    for(let i = 0; i < second; i++){
        j = first * j;
    }
    
    document.getElementById("output").innerHTML = `<p>${j}</p>`;

}

function clear(){
    document.getElementById("first").innerHTML = '<p></p>';
    document.getElementById("second").innerHTML = '<p></p>';
    document.getElementById("output").innerHTML = '<p></p>';
}
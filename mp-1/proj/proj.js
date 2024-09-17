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
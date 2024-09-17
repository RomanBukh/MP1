function checkAge(){
    let input=document.getElementById("input").value;
    if(isNaN(input)){
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("alt-output").innerHTML = `<p>You must enter a number</p>`; 
    }else if(input <= 0){
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("alt-output").innerHTML = `<p>Negative number is not acceptable</p>`; 
    }else if(input%1 != 0){
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("alt-output").innerHTML = `<p>The user has not entered a valid age</p>`; 
    }else if(input >= 18 && input <=120){
        document.getElementById("main-output").style.display = "block";
    }else{
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("alt-output").innerHTML = `<p>You may not see the content.</p>`;
    }
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
    
    document.getElementById("output").innerHTML = '<h3>${j}</h3>'

}
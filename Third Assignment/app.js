let getRed = document.getElementById("light__red");
let getYellow= document.getElementById("light__yellow");
let getGreen = document.getElementById("light__green");
let getChangeBtn = document.getElementById("activate-light");
let count=0;

getChangeBtn.onclick=() =>{
    
    switch(count){
        case 0:
            getRed.style.background="red";
            getYellow.style.background="#3F2F0A";
            getGreen.style.background="#0A3F1A";
            count++;
            break;
        case 1:
            getRed.style.background="#3F0A0A";
            getYellow.style.background="yellow";
            getGreen.style.background="#0A3F1A";
            count++;
            break;
        case 2:
            getRed.style.background="#3F0A0A";
            getYellow.style.background="#3F2F0A";
            getGreen.style.background="green";
            count=0;      
            break;
            
    }
}


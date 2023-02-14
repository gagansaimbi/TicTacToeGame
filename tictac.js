
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
let sum=0
let win = false
let c1_1 = document.getElementById("t1_1")
let c1_2 = document.getElementById("t1_2")
let c1_3 = document.getElementById("t1_3")

let c2_1 = document.getElementById("t2_1")
let c2_2 = document.getElementById("t2_2")
let c2_3 = document.getElementById("t2_3")

let c3_1 = document.getElementById("t3_1")
let c3_2 = document.getElementById("t3_2")
let c3_3 = document.getElementById("t3_3")

    
function o(tbl) {
    sum+=1
    if(win == false){

        if(sum<9){
            if(sum%2==0){
                    tbl.innerHTML="X"
            }
            else{
                    tbl.innerText="O"
            }
            
                announce();
              
            // announce()
            
        }
        else{
            alert("No one Wins. Try again!")
    }
    }
}

function game(){
    console.log("Started Game")
    
    document.getElementById("t1_1").onclick=function() {o(c1_1)}
    document.getElementById("t1_2").onclick=function() {o(c1_2)}
    document.getElementById("t1_3").onclick=function() {o(c1_3)}

    document.getElementById("t2_1").onclick=function() {o(c2_1)}
    document.getElementById("t2_2").onclick=function() {o(c2_2)}
    document.getElementById("t2_3").onclick=function() {o(c2_3)}

    document.getElementById("t3_1").onclick=function() {o(c3_1)}
    document.getElementById("t3_2").onclick=function() {o(c3_2)}
    document.getElementById("t3_3").onclick=function() {o(c3_3)}  
}

var squares = document.querySelectorAll('td')
function reset(){
    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent = ''
        squares[index].style.backgroundColor  = ""
    }
    
    sum=0
    win=false
}


function announce(){
    //player-1 check
    
    if(document.getElementById("t1_1").innerText=='O'
        &&
        document.getElementById("t1_2").innerText=='O'
        &&
        document.getElementById("t1_3").innerText=='O'
        ){
        
        c1_1.style.backgroundColor = "green"
        c1_2.style.backgroundColor = "green"
        c1_3.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
        
    }
    else if(document.getElementById("t2_1").innerText=='O'
            &&
            document.getElementById("t2_2").innerText=='O'
            &&
            document.getElementById("t2_3").innerText=='O'
            ){
           
        c2_1.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c2_3.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
           
    }
    else if(document.getElementById("t3_1").innerText=='O'
            &&
            document.getElementById("t3_2").innerText=='O'
            &&
            document.getElementById("t3_3").innerText=='O'
            ){
            
            c3_1.style.backgroundColor = "green"
        c3_2.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }
    else if(document.getElementById("t1_1").innerText=='O'
            &&
            document.getElementById("t2_1").innerText=='O'
            &&
            document.getElementById("t3_1").innerText=='O'
            ){
            
            c1_1.style.backgroundColor = "green"
        c2_1.style.backgroundColor = "green"
        c3_1.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }
    else if(document.getElementById("t1_2").innerText=='O'
            &&
            document.getElementById("t2_2").innerText=='O'
            &&
            document.getElementById("t3_2").innerText=='O'
            ){
            
            c1_2.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_2.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }
    else if(document.getElementById("t1_3").innerText=='O'
            &&
            document.getElementById("t2_3").innerText=='O'
            &&
            document.getElementById("t3_3").innerText=='O'
            ){
            
            c1_3.style.backgroundColor = "green"
        c2_3.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }
    else if(document.getElementById("t1_1").innerText=='O'
            &&
            document.getElementById("t2_2").innerText=='O'
            &&
            document.getElementById("t3_3").innerText=='O'
            ){
           
            c1_1.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }
    else if(document.getElementById("t1_3").innerText=='O'
            &&
            document.getElementById("t2_2").innerText=='O'
            &&
            document.getElementById("t3_1").innerText=='O'
            ){
            
            c1_3.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_1.style.backgroundColor = "green"
        win = true
        setTimeout(() => {
            alert("Player-1 wins")
        }, 100)
    }

    //player-2 cehck starts

    else if(document.getElementById("t1_1").innerText=='X'
    &&
    document.getElementById("t1_2").innerText=='X'
    &&
    document.getElementById("t1_3").innerText=='X'
    ){
    
    c1_1.style.backgroundColor = "green"
    c1_2.style.backgroundColor = "green"
    c1_3.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
    
}
else if(document.getElementById("t2_1").innerText=='X'
        &&
        document.getElementById("t2_2").innerText=='X'
        &&
        document.getElementById("t2_3").innerText=='X'
        ){
        
    c2_1.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c2_3.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)   
}
else if(document.getElementById("t3_1").innerText=='X'
        &&
        document.getElementById("t3_2").innerText=='X'
        &&
        document.getElementById("t3_3").innerText=='X'
        ){
        
        c3_1.style.backgroundColor = "green"
    c3_2.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
else if(document.getElementById("t1_1").innerText=='X'
        &&
        document.getElementById("t2_1").innerText=='X'
        &&
        document.getElementById("t3_1").innerText=='X'
        ){
        
        c1_1.style.backgroundColor = "green"
    c2_1.style.backgroundColor = "green"
    c3_1.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
else if(document.getElementById("t1_2").innerText=='X'
        &&
        document.getElementById("t2_2").innerText=='X'
        &&
        document.getElementById("t3_2").innerText=='X'
        ){
       
        c1_2.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_2.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
else if(document.getElementById("t1_3").innerText=='X'
        &&
        document.getElementById("t2_3").innerText=='X'
        &&
        document.getElementById("t3_3").innerText=='X'
        ){
        
        c1_3.style.backgroundColor = "green"
    c2_3.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
else if(document.getElementById("t1_1").innerText=='X'
        &&
        document.getElementById("t2_2").innerText=='X'
        &&
        document.getElementById("t3_3").innerText=='X'
        ){
        
        c1_1.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
else if(document.getElementById("t1_3").innerText=='X'
        &&
        document.getElementById("t2_2").innerText=='X'
        &&
        document.getElementById("t3_1").innerText=='X'
        ){
       
        c1_3.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_1.style.backgroundColor = "green"
    win = true
    setTimeout(() => {
        alert("Player-2 wins")
    }, 100)
}
}

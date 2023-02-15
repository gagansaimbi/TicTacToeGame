


function mode(){/// To change the value of the data-bs-theme attribute(Light/Dark Theme)
    const body = document.querySelector('body')// Get the body element

    // Get the value of the data-bs-theme attribute
    const currentTheme = body.getAttribute('data-bs-theme')


    if (currentTheme == 'dark') {

        body.setAttribute('data-bs-theme', 'light')
        currentTheme == 'light'
        document.getElementById("image_for_mode").src = "dark_mode.png"

        /*  //Old code(v3.0) for toggle button replace with images for better UI experience

        var change = document.getElementById("toggle_switch")
        change.classList.replace('btn-light','btn-dark')
        change.innerText = 'Dark Mode'
        */
        var tableColor = document.querySelector('table.table-bordered')
        tableColor.style.borderColor  = "black"//changing table color to black in light mode
        

    } else   {

        body.setAttribute('data-bs-theme', 'dark')
        currentTheme == 'dark'
        document.getElementById("image_for_mode").src = "light_mode.png"

        /*  //Old code(v3.0) for toggle button replace with images for better UI experience

        var change = document.getElementById("toggle_switch")
        change.classList.replace('btn-dark','btn-light')
        change.innerText = 'Light Mode'
        */
        var tableColor = document.querySelector('table.table-bordered')
        tableColor.style.borderColor  = "white"//changing table color to white in dark mode

    }
}

let sum=0 //to count the number of entries by players
let win = false // to stop the game once any player wins or Tie

//Grabbing all the cells to be populated with 'O'/'X' on click by User
let c1_1 = document.getElementById("t1_1")
let c1_2 = document.getElementById("t1_2")
let c1_3 = document.getElementById("t1_3")
let c2_1 = document.getElementById("t2_1")
let c2_2 = document.getElementById("t2_2")
let c2_3 = document.getElementById("t2_3")
let c3_1 = document.getElementById("t3_1")
let c3_2 = document.getElementById("t3_2")
let c3_3 = document.getElementById("t3_3")

    
function o(tbl) {//function to check winner/tie and add O/X value on click
    sum+=1
    if(win == false){

        if(sum<9){//Tie check
            if(sum%2==0){
                    tbl.innerHTML="X"
            }
            else{
                    tbl.innerText="O"
            }

            announce();          
        }
        else{
            alert("No one Wins. Try again!")
    }
    }
}

function game(){//Based on cell that has been clicked, players entry(O/X) will be added
        
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


function reset(){//To Reset the board and Start fresh game
    var squares = document.querySelectorAll('td')
    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent = ''
        squares[index].style.backgroundColor  = ''
    }
    sum=0
    win=false
}


function announce(){//To check the winner and displays an alert
    
    //player-1 check
    if(document.getElementById("t1_1").innerText=='O'
        &&
        document.getElementById("t1_2").innerText=='O'
        &&
        document.getElementById("t1_3").innerText=='O'
        ){
        
        c1_1.style.backgroundColor = "#01B636"
        c1_2.style.backgroundColor = "#01B636"
        c1_3.style.backgroundColor = "#01B636"
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
           
        c2_1.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c2_3.style.backgroundColor = "#01B636"
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
            
            c3_1.style.backgroundColor = "#01B636"
        c3_2.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
            
            c1_1.style.backgroundColor = "#01B636"
        c2_1.style.backgroundColor = "#01B636"
        c3_1.style.backgroundColor = "#01B636"
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
            
            c1_2.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_2.style.backgroundColor = "#01B636"
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
            
            c1_3.style.backgroundColor = "#01B636"
        c2_3.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
           
            c1_1.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
            
            c1_3.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_1.style.backgroundColor = "#01B636"
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
    
    c1_1.style.backgroundColor = "#01B636"
    c1_2.style.backgroundColor = "#01B636"
    c1_3.style.backgroundColor = "#01B636"
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
            
        c2_1.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c2_3.style.backgroundColor = "#01B636"
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
            
            c3_1.style.backgroundColor = "#01B636"
        c3_2.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
            
            c1_1.style.backgroundColor = "#01B636"
        c2_1.style.backgroundColor = "#01B636"
        c3_1.style.backgroundColor = "#01B636"
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
        
            c1_2.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_2.style.backgroundColor = "#01B636"
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
            
            c1_3.style.backgroundColor = "#01B636"
        c2_3.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
            
            c1_1.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_3.style.backgroundColor = "#01B636"
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
        
            c1_3.style.backgroundColor = "#01B636"
        c2_2.style.backgroundColor = "#01B636"
        c3_1.style.backgroundColor = "#01B636"
        win = true
        setTimeout(() => {
            alert("Player-2 wins")
        }, 100)
    }
}

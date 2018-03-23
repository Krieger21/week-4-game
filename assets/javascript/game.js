$(document).ready(function(){

    // Creating the variables we will need.
var wins = 0
var losses = 0
var compTotal = parseInt(rando())
var userTotal = 0
var jewel1 = parseInt(jewel1())
var jewel2 = parseInt(jewel2())
var jewel3 = parseInt(jewel3())
var jewel4 = parseInt(jewel4())

$("#randoScore").html(parseInt(compTotal))

// creating a random number for compTotal


    
    function rando() {
        var compRandom = Math.floor(Math.random() * ((120-19)+1) + 19);
        return compRandom
    }
    console.log(compTotal)
    
    // creating a random number for the jewel buttons
    function jewel1() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    console.log(jewel1)
    
    function jewel2() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    console.log(jewel2)
    
    function jewel3() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    console.log(jewel3)
    
    function jewel4() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    console.log(jewel4) 


// creating click events for the jewel images and win/loss if functions

function clicker() {

    $("#diamond").on('click', function() {
    
        var topher = userTotal += jewel1
        $("#user").text(topher)

        if (topher === compTotal) {
            alert("YOU WIN!")
            wins = wins + 1
            $("#counter1").text(wins)
            restart()

        }
        
        if (topher > compTotal) {
            alert("YOU LOSE!")
            losses = losses + 1
            $("#counter2").text(losses)
            restart()
        }
    })
    
    $("#emerald").on('click', function() {
        
        var topher2 = userTotal += jewel2
        $("#user").text(topher2)

        if (topher2 === compTotal) {
            alert("YOU WIN!")
            wins++
            $("#counter1").text(wins)
            restart()
        }
        
        if (topher2 > compTotal) {
            alert("YOU LOSE!")
            losses++
            $("#counter2").text(losses)
            restart()
        }
        
    })
    
    $("#ruby").on('click', function() {
        
        var topher3 = userTotal += jewel3
        $("#user").text(topher3)

        if (topher3 === compTotal) {
            alert("YOU WIN!")
            wins++
            $("#counter1").text(wins)
            restart()
        }
        
        if (topher3 > compTotal) {
            alert("YOU LOSE!")
            losses++
            $("#counter2").text(losses)
            restart()
        }
        
    })
    
    $("#topaz").on('click', function() {
        
        var topher4 = userTotal += jewel4
        $("#user").text(topher4)

        if (topher4 === compTotal) {
            alert("YOU WIN!")
            wins++
            $("#counter1").text(wins)
            restart()
        }
        
        if (topher4 > compTotal) {
            alert("YOU LOSE!")
            losses++
            $("#counter2").text(losses)
            restart()
        }
        
    })

}
clicker()

// Creating a restart function
// could not quite figure out how to make the jewel values update though games
function restart () {

userTotal = 0

var jewel1 = parseInt(jewel11())
var jewel2 = parseInt(jewel22())
var jewel3 = parseInt(jewel32())
var jewel4 = parseInt(jewel42())

    $("#user").text(userTotal)
    compTotal = parseInt(rando2())
    $("#randoScore").html(parseInt(compTotal))
    
    function rando2() {
        var compRandom = Math.floor(Math.random() * ((120-19)+1) + 19);
        return compRandom
    }
    rando2()
    console.log(compTotal)
    
    
    function jewel11() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    jewel11()
    console.log(jewel1)
    
    function jewel22() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    jewel22()
    console.log(jewel2)
    
    function jewel32() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
   jewel32()
   console.log(jewel3)
    
    function jewel42() {
        var compRandom = Math.floor(Math.random() * 12) + 1;
        return compRandom
    }
    jewel42()
    console.log(jewel4)
}

})




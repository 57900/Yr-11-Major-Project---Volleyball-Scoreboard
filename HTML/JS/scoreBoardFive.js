//Gets first Set Score
var firstSet = document.getElementById("firstSet")
firstSet.style.display = "none";
var firstSetOn = document.getElementById("firstSetOn")
firstSetOn.style.display = "block";

//Gets Second Set Score
var secondSet = document.getElementById("secondSet")
secondSet.style.display = "none";
var secondSetOn = document.getElementById("secondSetOn")
secondSetOn.style.display = "none";

//Gets Third Set Score
var thirdSet = document.getElementById("thirdSet")
thirdSet.style.display = "none";
var thirdSetOn = document.getElementById("thirdSetOn")
thirdSetOn.style.display = "none";

//Gets Fouth Set Score
var fourthSet = document.getElementById("fourthSet")
fourthSet.style.display = "none";
var fourthSetOn = document.getElementById("fourthSetOn")
fourthSetOn.style.display = "none";

//Gets Fifth Set Score
var fifthSet = document.getElementById("fifthSet")
fifthSet.style.display = "none";
var fifthSetOn = document.getElementById("fifthSetOn")
fifthSetOn.style.display = "none";

//Input section div
var inputs = document.getElementById("fiveSetInput")
inputs.style.display = "block";

//Scoreboard Div
var scoreboard = document.getElementById("fiveSetScoreboard")
scoreboard.style.display = "none";

//Man of the Match Div
var manOfTheMatch = document.getElementById("manOfTheMatch")
manOfTheMatch.style.display = "none"

//Back button to input section
var backInput = document.getElementById("backInput")

//enter button for Man of the match
var MOTMEnter = document.getElementById("MOTMEnter")


var codeStopper = 0



function enterFiveSet(){
    //Gets team names in textbox
    var homeTeamName = document.getElementById("homeTeamFive").value
    var awayTeamName = document.getElementById("awayTeamFive").value

    //Changes the team names from home and away
    if (homeTeamName == ""){
        if (awayTeamName == ""){
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + "Away"
        }else{
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + awayTeamName
        }
    }else if (awayTeamName == ""){
        if (homeTeamName == ""){
            document.getElementById("namesOfTeams").innerHTML = "Home" + " VS " + "Away"
        }else{
            document.getElementById("namesOfTeams").innerHTML = homeTeamName + " VS " + "Away"  
        }
    }else{
        document.getElementById("namesOfTeams").innerHTML = homeTeamName + " VS " + awayTeamName
    }
    inputs.style.display = "none";
    scoreboard.style.display = "block";
    codeStopper = 1
    window.addEventListener("keyup", onKeyUp, false);
}

//back button to input section
function back(){
    inputs.style.display = "block";
    scoreboard.style.display = "none";
    codeStopper = 0
}


var homeScore = [0,0,0,0,0] //Array with scores for 5 sets for home team
var awayScore = [0,0,0,0,0] //Array with scores for 5 sets for away team
var awaySetsWon = 0 //Away Sets won
var homeSetsWon = 0 //Home Sets won
 //When you press a key on your keboard it activates the score system



function onKeyUp(event){
    var keyCode = event.keyCode;
    switch(keyCode){
        case 84:  //t key Home Sets goes up
        if (codeStopper == 1){
             if (homeSetsWon < 3){
                if (awaySetsWon !== 3){ //when a team hasn't made it to 3 sets
                    homeSetsWon = homeSetsWon + 1 //adds one to home teams sets
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 1){ //display second set
                        secondSetOn.style.display = "block";
                        firstSetOn.style.display = "none";
                        firstSet.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 2){ //display third set
                        secondSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 3){ //display fourth set
                        if (homeSetsWon == 3){ //If home teams wins 3 sets
                            fourthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            manOfTheMatch.style.display = "block";
                            backInput.style.display = "none"
                            codeStopper = 0
                        }else{ //Go into fourth set
                            fourthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                        }
                    }else if(homeSetsWon + awaySetsWon == 4){ //display fifth set
                        if (homeSetsWon == 3){ //If home teams wins 3 sets
                            fifthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                            manOfTheMatch.style.display = "block";
                            backInput.style.display = "none"
                            codeStopper = 0
                        }else{ //Go into fifth set
                            fifthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                        }
                    }else{ //display fifth set winner
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none"
                        codeStopper = 0
                    }  
                }
            }
        }
           
        break;
        case 71:  //g key Home Sets goes down
        if (codeStopper == 1){
            if (homeSetsWon > 0){ //To make sure the sets don't go past 0
                if (awaySetsWon !== 3){ //To make sure the code stops working when away team has won
                    homeSetsWon = homeSetsWon - 1
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 0){ //Shows first set
                        secondSetOn.style.display = "none";
                        firstSetOn.style.display = "block";
                        firstSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 1){ //Shows second set
                        secondSetOn.style.display = "block";
                        secondSet.style.display = "none";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 2){ //Shows third set
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                        thirdSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 3){ //Shows fourth set
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 4){ //Shows fifth set
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "none";
                    }
                }
            }
        }
            
        break;
        case 87:  //W Key Home score goes up
        if (codeStopper == 1){
            if (homeSetsWon + awaySetsWon == 0){ //Changes first set home score
                if (homeScore[0] < 24){ //Checks if home home score is less then 24
                    homeScore[0] = homeScore[0] + 1
                }else if (homeScore[0] - awayScore[0] < 1){ //If its greater then 24 checks if the is a 2 point difference
                    homeScore[0] = homeScore[0] + 1
                }else{ //if not any of that then goes to next set
                    homeScore[0] = homeScore[0] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                } 
                //Display Score
                document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]

            }else if (homeSetsWon + awaySetsWon == 1){ //Changes second set home score
                if (homeScore[1] < 24){ //Checks if home home score is less then 24
                    homeScore[1]= homeScore[1] + 1
                }else if (homeScore[1] - awayScore[1] < 1){ //If its greater then 24 checks if the is a 2 point difference
                    homeScore[1] = homeScore[1] + 1
                }else{ //if not any of that then goes to next set
                    homeScore[1] = homeScore[1] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                } 
                document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]

            }else if (homeSetsWon + awaySetsWon == 2){ //Change third set home score
                if (homeScore[2] < 24){ //Checks if home home score is less then 24
                    homeScore[2]= homeScore[2] + 1
                }else if (homeScore[2] - awayScore[2] < 1){//If its greater then 24 checks if the is a 2 point difference
                    homeScore[2] = homeScore[2] + 1
                }else{
                    homeScore[2] = homeScore[2] + 1
                    homeSetsWon = homeSetsWon + 1
                    if (homeSetsWon == 3){ // See if home team wins
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none";
                        codeStopper = 0
                    }else{ //If not go onto next set
                        fourthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }
                } 
                document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]

            }else if (homeSetsWon + awaySetsWon == 3){ //Change Fourth set home score
                if (homeScore[3] < 24){ //Checks if home home score is less then 24
                    homeScore[3]= homeScore[3] + 1
                }else if (homeScore[3] - awayScore[3] < 1){ //If its greater then 24 checks if the is a 2 point difference
                    homeScore[3] = homeScore[3] + 1
                }else{
                    homeScore[3] = homeScore[3] + 1
                    homeSetsWon = homeSetsWon + 1
                    if (homeSetsWon == 3){// See if home team wins
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none";
                        codeStopper = 0
                    }else{//If not go onto next set
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                } 
                document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
            }else if (homeSetsWon + awaySetsWon == 4){ //Change Fifth set home score
                if (homeScore[4] < 14){
                    homeScore[4]= homeScore[4] + 1
                }else if (homeScore[4] - awayScore[4] < 1){
                    homeScore[4] = homeScore[4] + 1
                }else{ //Home Team Wins
                    homeScore[4] = homeScore[4] + 1
                    homeSetsWon = homeSetsWon + 1
                    fifthSet.style.display = "block";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSetOn.style.display = "none";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                    manOfTheMatch.style.display = "block";
                    backInput.style.display = "none"
                    codeStopper = 0;
                } 
                document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
            }
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
        }
            
        break;
        case 83:  //s Key Home score goes down
        if (codeStopper == 1){
            if(homeSetsWon + awaySetsWon == 0){
                if (homeScore[0] !== 0){
                    homeScore[0] = homeScore[0] - 1
                    document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                    document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 1){
                if (homeScore[1] !== 0){
                    homeScore[1] = homeScore[1] - 1
                    document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                    document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 2){
                if (homeScore[2] !== 0){
                    homeScore[2] = homeScore[2] - 1
                    document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                    document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 3){
                if (homeScore[3] !== 0){
                    homeScore[3] = homeScore[3] - 1
                    document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                    document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 4){
                if (homeScore[4] !== 0){
                    homeScore[4] = homeScore[4] - 1
                    document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                    document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                    manOfTheMatch.style.display = "none";
                }
            }
        }

        break;
        case 89:  //y key Away Sets goes up
        if (codeStopper == 1){
            if (awaySetsWon < 3){
                if (homeSetsWon !== 3){
                    awaySetsWon = awaySetsWon + 1
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 1){
                        secondSetOn.style.display = "block";
                        firstSetOn.style.display = "none";
                        firstSet.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 2){
                        secondSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                    }else if(homeSetsWon + awaySetsWon == 3){
                        if (awaySetsWon == 3){
                            fourthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            manOfTheMatch.style.display = "block";
                            backInput.style.display = "none";
                            codeStopper = 0
                        }else{
                            fourthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                        }
                    }else if(homeSetsWon + awaySetsWon == 4){
                        if (awaySetsWon == 3){
                            fifthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                            manOfTheMatch.style.display = "block";
                            backInput.style.display = "none";
                            codeStopper = 0
                        }else{
                            fifthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                        }
                    }else{
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none";
                        codeStopper = 0
                    }
                }  
            }  
        }
            
        break;
        case 72:  //h key Away sets goes down
        if (codeStopper == 1){
            if (awaySetsWon > 0 ){
                if (homeSetsWon !== 3){
                    awaySetsWon = awaySetsWon - 1
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 0){
                        secondSetOn.style.display = "none";
                        firstSetOn.style.display = "block";
                        firstSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 1){
                        secondSetOn.style.display = "block";
                        secondSet.style.display = "none";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 2){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                        thirdSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "none";
                        manOfTheMatch.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 4){
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "none";
                    }
                }
            }   
        }
            
        break;
        case 73:  //i key Away score goes up
        if (codeStopper == 1){
            if (homeSetsWon + awaySetsWon == 0){ //First Set
                if (awayScore[0] < 24){
                    awayScore[0] = awayScore[0] + 1
                }else if (awayScore[0] - homeScore[0] < 1){
                    awayScore[0] = awayScore[0] + 1
                }else{
                    awayScore[0] = awayScore[0] + 1
                    awaySetsWon = awaySetsWon + 1
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                } 
                document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]

            }else if (homeSetsWon + awaySetsWon == 1){ //Second Set
                if (awayScore[1] < 24){
                    awayScore[1]= awayScore[1] + 1
                }else if (awayScore[1] - homeScore[1] < 1){
                    awayScore[1] = awayScore[1] + 1
                }else{
                    awayScore[1] = awayScore[1] + 1
                    awaySetsWon = awaySetsWon + 1
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                } 
                document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]

            }else if (homeSetsWon + awaySetsWon == 2){ //Third Set
                if (awayScore[2] < 24){
                    awayScore[2]= awayScore[2] + 1
                }else if (awayScore[2] - homeScore[2] < 1){
                    awayScore[2] = awayScore[2] + 1
                }else{
                    awayScore[2] = awayScore[2] + 1
                    awaySetsWon = awaySetsWon + 1
                    if (awaySetsWon == 3){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none";
                        codeStopper = 0
                    }else{
                        fourthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                    }
                } 
                document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]

            }else if (homeSetsWon + awaySetsWon == 3){ //Fourth Set
                if (awayScore[3] < 24){
                    awayScore[3]= awayScore[3] + 1
                }else if (awayScore[3] - homeScore[3] < 1){
                    awayScore[3] = awayScore[3] + 1
                }else{
                    awayScore[3] = awayScore[3] + 1
                    awaySetsWon = awaySetsWon + 1
                    if (awaySetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                        manOfTheMatch.style.display = "block";
                        backInput.style.display = "none";
                        codeStopper = 0
                    }else{
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                } 
                document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
            }else if (homeSetsWon + awaySetsWon == 4){ //Fifth Set
                if (awayScore[4] < 14){
                    awayScore[4]= awayScore[4] + 1
                }else if (awayScore[4] - homeScore[4] < 1){
                    awayScore[4] = awayScore[4] + 1
                }else{
                    awayScore[4] = awayScore[4] + 1
                    awaySetsWon = awaySetsWon + 1
                    fifthSet.style.display = "block";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSetOn.style.display = "none";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                    manOfTheMatch.style.display = "block";
                    backInput.style.display = "none";
                    codeStopper = 0
                } 
                document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
            }
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon

        }
        
        break;
        case 75:  //k key Away score goes down
        if (codeStopper == 1){
            if(homeSetsWon + awaySetsWon == 0){
                if (awayScore[0] !== 0){
                    awayScore[0] = awayScore[0] - 1
                    document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                    document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 1){
                if (awayScore[1] !== 0){
                    awayScore[1] = awayScore[1] - 1
                    document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                    document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 2){
                if (awayScore[2] !== 0){
                    awayScore[2] = awayScore[2] - 1
                    document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                    document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 3){
                if (awayScore[3] !== 0){
                    awayScore[3] = awayScore[3] - 1
                    document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                    document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                    manOfTheMatch.style.display = "none";
                }
            }else if (homeSetsWon + awaySetsWon == 4){
                if (awayScore[4] !== 0){
                    awayScore[4] = awayScore[4] - 1
                    document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                    document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                    manOfTheMatch.style.display = "none";
                }
            }
        }
        
        break;
    }

    var homeTeamName = document.getElementById("homeTeamFive").value
    var awayTeamName = document.getElementById("awayTeamFive").value

    if (homeSetsWon == 3){ // Displays home team wins
        if (homeTeamName == ""){
            document.getElementById("winner").innerHTML = "Home Team Wins"
        }else{
            document.getElementById("winner").innerHTML = homeTeamName + " Wins"
        }
    }
    
    if (homeSetsWon == 2){ //hide winner sentence
        document.getElementById("winner").innerHTML = ""
    }

    if (awaySetsWon == 3){ // Displays Away team wins
        if (awayTeamName == ""){
            document.getElementById("winner").innerHTML = "Away Team Wins"
        }else{
            document.getElementById("winner").innerHTML = awayTeamName + " Wins"
        }
    }

    if (awaySetsWon == 2){//hide winner sentence
        document.getElementById("winner").innerHTML = ""
    }
}

function findMOTM(){
    var name = document.getElementById('searchMOTM').value;
    var list = [];
    //Add players to list to search for MOTM
    if (document.getElementById("homePlayerOne").value !== ""){
        list[list.length] = document.getElementById("homePlayerOne").value
    }
    if (document.getElementById("homePlayerTwo").value !== ""){
        list[list.length] = document.getElementById("homePlayerTwo").value
    }
    if (document.getElementById("homePlayerThree").value !== ""){
        list[list.length] = document.getElementById("homePlayerThree").value
    }
    if (document.getElementById("homePlayerFour").value !== ""){
        list[list.length] = document.getElementById("homePlayerFour").value
    }
    if (document.getElementById("homePlayerFive").value !== ""){
        list[list.length] = document.getElementById("homePlayerFive").value
    }
    if (document.getElementById("homePlayerSix").value !== ""){
        list[list.length] = document.getElementById("homePlayerSix").value
    }
    if (document.getElementById("awayPlayerOne").value !== ""){
        list[list.length] = document.getElementById("awayPlayerOne").value
    }
    if (document.getElementById("awayPlayerTwo").value !== ""){
        list[list.length] = document.getElementById("awayPlayerTwo").value
    }
    if (document.getElementById("awayPlayerThree").value !== ""){
        list[list.length] = document.getElementById("awayPlayerThree").value
    }
    if (document.getElementById("awayPlayerFour").value !== ""){
        list[list.length] = document.getElementById("awayPlayerFour").value
    }
    if (document.getElementById("awayPlayerFive").value !== ""){
        list[list.length] = document.getElementById("awayPlayerFive").value
    }
    if (document.getElementById("awayPlayerSix").value !== ""){
        list[list.length] = document.getElementById("awayPlayerSix").value
    }
    if (document.getElementById("homePlayerLib").value !== ""){
        list[list.length] = document.getElementById("homePlayerTwo").value
    }
    if (document.getElementById("awayPlayerLib").value !== ""){
        list[list.length] = document.getElementById("homePlayerTwo").value
    }
    
    sort(list);
    binarysearch(name,list);
}

//Search for Man of the Match
var binarysearch = function (name,list) {
    var lower = 0,
        upper = list.length - 1,
        foundit = false,
        middle = 0,
        positionfound = 0;

    do {
        middle = Math.floor((upper + lower) / 2);
        if (name === list[middle]) {
            foundit = true;
            positionfound = middle;
        } else {
            if (name < list[middle]) {
                upper = middle - 1;
            } else {
                lower = middle + 1;
            }
        }
    }
    while (foundit === false && lower <= upper);

    if (foundit) { //Found the player
        document.getElementById("displayMOTM").innerHTML = list[positionfound] + "  is The Man of The Match"
        console.log('Name found at position  ' + positionfound);
        MOTMEnter.style.display = "none"
    } else { //Player not found
        alert("player not found. Enter a actual player!")
    }
};    



var sort = function (list) { //sort the array of names

    var comparisons = 0,
        swaps = 0,
        swapped = true,
        endIndex = 0,
        len = list.length - 1;

    while (swapped === true) {
        swapped = false;
        i = 0;

        while (i < len) {
            comparisons++;

            if (list[i] > list[i + 1]) {

                swapping = list[i];
                list[i] = list[i + 1];
                list[i + 1] = swapping;
                swapped = true;
                swaps++;
            }
            i++;
        }
        len--;
    }

    console.log("--Bubble Sort--");
    console.log("Comparisons: " + comparisons);
    console.log("Swaps: " + swaps);
    console.log(list);

    return list;
};

function ChangeMOTM(){//change man of the match
    MOTMEnter.style.display = "block"
    document.getElementById("displayMOTM").innerHTML = ""
}

function backScore(){//go back to scoreboard
    manOfTheMatch.style.display = "none"
    codeStopper = 1
}
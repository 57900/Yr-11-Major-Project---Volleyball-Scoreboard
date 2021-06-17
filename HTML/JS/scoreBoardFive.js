

var firstSet = document.getElementById("firstSet")
firstSet.style.display = "none";
var firstSetOn = document.getElementById("firstSetOn")
firstSetOn.style.display = "block";

var secondSet = document.getElementById("secondSet")
secondSet.style.display = "none";
var secondSetOn = document.getElementById("secondSetOn")
secondSetOn.style.display = "none";

var thirdSet = document.getElementById("thirdSet")
thirdSet.style.display = "none";
var thirdSetOn = document.getElementById("thirdSetOn")
thirdSetOn.style.display = "none";

var fourthSet = document.getElementById("fourthSet")
fourthSet.style.display = "none";
var fourthSetOn = document.getElementById("fourthSetOn")
fourthSetOn.style.display = "none";

var fifthSet = document.getElementById("fifthSet")
fifthSet.style.display = "none";
var fifthSetOn = document.getElementById("fifthSetOn")
fifthSetOn.style.display = "none";

function enterFiveSet(){
    var homeTeamName = document.getElementById("homeTeamFive").value
    var awayTeamName = document.getElementById("awayTeamFive").value

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
}

var homeScore = [0,0,0,0,0]
var awayScore = [0,0,0,0,0]
var awaySetsWon = 0
var homeSetsWon = 0
window.addEventListener("keyup", onKeyUp, false);



function onKeyUp(event){
    var keyCode = event.keyCode;
    switch(keyCode){
        case 84:  //t key Home Sets goes up
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
                        if (homeSetsWon == 3){
                            fourthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                        }else{
                            fourthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            thirdSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                        }
                    }else if(homeSetsWon + awaySetsWon == 4){ //display fifth set
                        if (homeSetsWon == 3){
                            fifthSetOn.style.display = "none";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                        }else{
                            fifthSetOn.style.display = "block";
                            secondSet.style.display = "block";
                            firstSet.style.display = "block";
                            fourthSetOn.style.display = "none";
                            thirdSet.style.display = "block";
                            fourthSet.style.display = "block";
                        }
                    }else{ //display first set
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }  
                }
            }
        break;
        case 71:  //g key Home Sets goes down
            if (homeSetsWon > 0){
                if (awaySetsWon !== 3){
                    homeSetsWon = homeSetsWon - 1
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 0){
                        secondSetOn.style.display = "none";
                        firstSetOn.style.display = "block";
                        firstSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 1){
                        secondSetOn.style.display = "block";
                        secondSet.style.display = "none";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 2){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                        thirdSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 4){
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                }
                
            }
        break;
        case 87:  //W Key Home score goes up
            if (homeSetsWon + awaySetsWon == 0){
                if (homeScore[0] < 24){
                    homeScore[0] = homeScore[0] + 1
                }else if (homeScore[0] - awayScore[0] < 1){
                    homeScore[0] = homeScore[0] + 1
                }else{
                    homeScore[0] = homeScore[0] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "block";
                    firstSetOn.style.display = "none";
                    firstSet.style.display = "block";
                } 
                document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]

            }else if (homeSetsWon + awaySetsWon == 1){
                if (homeScore[1] < 24){
                    homeScore[1]= homeScore[1] + 1
                }else if (homeScore[1] - awayScore[1] < 1){
                    homeScore[1] = homeScore[1] + 1
                }else{
                    homeScore[1] = homeScore[1] + 1
                    homeSetsWon = homeSetsWon + 1
                    secondSetOn.style.display = "none";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    thirdSetOn.style.display = "block";
                } 
                document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]

            }else if (homeSetsWon + awaySetsWon == 2){
                if (homeScore[2] < 24){
                    homeScore[2]= homeScore[2] + 1
                }else if (homeScore[2] - awayScore[2] < 1){
                    homeScore[2] = homeScore[2] + 1
                }else{
                    homeScore[2] = homeScore[2] + 1
                    homeSetsWon = homeSetsWon + 1
                    if (homeSetsWon == 3){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                        thirdSet.style.display = "block";
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

            }else if (homeSetsWon + awaySetsWon == 3){
                if (homeScore[3] < 24){
                    homeScore[3]= homeScore[3] + 1
                }else if (homeScore[3] - awayScore[3] < 1){
                    homeScore[3] = homeScore[3] + 1
                }else{
                    homeScore[3] = homeScore[3] + 1
                    homeSetsWon = homeSetsWon + 1
                    if (homeSetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
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
            }else if (homeSetsWon + awaySetsWon == 4){
                if (homeScore[4] < 14){
                    homeScore[4]= homeScore[4] + 1
                }else if (homeScore[4] - awayScore[4] < 1){
                    homeScore[4] = homeScore[4] + 1
                }else{
                    homeScore[4] = homeScore[4] + 1
                    homeSetsWon = homeSetsWon + 1
                    fifthSet.style.display = "block";
                    secondSet.style.display = "block";
                    firstSet.style.display = "block";
                    fifthSetOn.style.display = "none";
                    thirdSet.style.display = "block";
                    fourthSet.style.display = "block";
                } 
                document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
            }
            document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
            
        break;
        case 83:  //s Key Home score goes down
            if(homeSetsWon + awaySetsWon == 0){
                if (homeScore[0] !== 0){
                    homeScore[0] = homeScore[0] - 1
                    document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                    document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                }
            }else if (homeSetsWon + awaySetsWon == 1){
                if (homeScore[1] !== 0){
                    homeScore[1] = homeScore[1] - 1
                    document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                    document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                }
            }else if (homeSetsWon + awaySetsWon == 2){
                if (homeScore[2] !== 0){
                    homeScore[2] = homeScore[2] - 1
                    document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                    document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                }
            }else if (homeSetsWon + awaySetsWon == 3){
                if (homeScore[3] !== 0){
                    homeScore[3] = homeScore[3] - 1
                    document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                    document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                }
            }else if (homeSetsWon + awaySetsWon == 4){
                if (homeScore[4] !== 0){
                    homeScore[4] = homeScore[4] - 1
                    document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                    document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                }
            }

        break;
        case 89:  //y key Away Sets goes up
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
                    }
                }  
            }  
        

        break;
        case 72:  //h key Away sets goes down
            if (awaySetsWon > 0 ){
                if (homeSetsWon !== 3){
                    awaySetsWon = awaySetsWon - 1
                    document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon
                    if (homeSetsWon + awaySetsWon == 0){
                        secondSetOn.style.display = "none";
                        firstSetOn.style.display = "block";
                        firstSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 1){
                        secondSetOn.style.display = "block";
                        secondSet.style.display = "none";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 2){
                        fourthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        thirdSetOn.style.display = "block";
                        thirdSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 3){
                        fifthSetOn.style.display = "none";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fourthSetOn.style.display = "block";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "none";
                    }else if(homeSetsWon + awaySetsWon == 4){
                        fifthSetOn.style.display = "block";
                        secondSet.style.display = "block";
                        firstSet.style.display = "block";
                        fifthSet.style.display = "none";
                        thirdSet.style.display = "block";
                        fourthSet.style.display = "block";
                    }
                }
            }   
        break;
        case 73:  //i key Away score goes up
        if (homeSetsWon + awaySetsWon == 0){
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

        }else if (homeSetsWon + awaySetsWon == 1){
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

        }else if (homeSetsWon + awaySetsWon == 2){
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

        }else if (homeSetsWon + awaySetsWon == 3){
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
        }else if (homeSetsWon + awaySetsWon == 4){
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
            } 
            document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
            document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
        }
        document.getElementById("setsWon").innerHTML = homeSetsWon + " Sets " + awaySetsWon

        break;
        case 75:  //k key Away score goes down
        if(homeSetsWon + awaySetsWon == 0){
            if (awayScore[0] !== 0){
                awayScore[0] = awayScore[0] - 1
                document.getElementById("firstSetOn").innerHTML = homeScore[0] + " 1st " + awayScore[0]
                document.getElementById("firstSet").innerHTML = homeScore[0] + " 1st " + awayScore[0]
            }
        }else if (homeSetsWon + awaySetsWon == 1){
            if (awayScore[1] !== 0){
                awayScore[1] = awayScore[1] - 1
                document.getElementById("secondSetOn").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
                document.getElementById("secondSet").innerHTML = homeScore[1] + " 2nd " + awayScore[1]
            }
        }else if (homeSetsWon + awaySetsWon == 2){
            if (awayScore[2] !== 0){
                awayScore[2] = awayScore[2] - 1
                document.getElementById("thirdSetOn").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
                document.getElementById("thirdSet").innerHTML = homeScore[2] + " 3rd " + awayScore[2]
            }
        }else if (homeSetsWon + awaySetsWon == 3){
            if (awayScore[3] !== 0){
                awayScore[3] = awayScore[3] - 1
                document.getElementById("fourthSetOn").innerHTML = homeScore[3] + " 4th " + awayScore[3]
                document.getElementById("fourthSet").innerHTML = homeScore[3] + " 4th " + awayScore[3]
            }
        }else if (homeSetsWon + awaySetsWon == 4){
            if (awayScore[4] !== 0){
                awayScore[4] = awayScore[4] - 1
                document.getElementById("fifthSetOn").innerHTML = homeScore[4] + " 5th " + awayScore[4]
                document.getElementById("fifthSet").innerHTML = homeScore[4] + " 5th " + awayScore[4]
            }
        }
        break;
    }
}

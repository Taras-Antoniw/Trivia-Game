//javascript and jquery code
// data intialization


 var question = ["What is not the name of an Ottawa CFL team?", "Which US CFL team won the Grey Cup?", 
 "Which NFL quartback did not play in the CFL?", "Which is the smallest CFL stadium?",
"Last team to win back-to-back Grey Cups?", "Longest Grey Cup drought","Which team has won the most Grey Cups?",
"The CFL player in the NFL Hall of Fame"];
 var aAnswer = ["Rough Riders","San Antonio Texans","Dan Marino", "BMO Field - Toronto","Toronto Argos","Hamilton Tiger Cats",
"Toronto Argonauts","Joe Theisman"];
 var bAnswer = ["Red Necks","Memphis Mad Dogs","Doug Flutie","Mosaic Field - Regina","Calgary Stampeders","Edmonton Eskimos",
"Winnipeg Blue Bombers","Warren Moon"];
 var cAnswer = ["Renegades","Las Vegas Posse","Joe Thiesman","Tim Hortons Field - Hamliton","Montreal Alouettes","Winnipeg Blue Bombers",
"Edmonton Eskimos","Jeff Garcia"];
 var dAnswer = ["Red Blacks","Baltimore Stallions","Warren Moon","Molson Stadium - Montreal","Edmonton Eskimos","Saskatchewan Roughriders",
 "Hamilton Tiger Cats","Doug Flutie"];
 var correctAnswer =["B","D","A","D","C","C","A","B"];


for (i=0; i<question.length; i++) {
    console.log(question[i]);
};

//Variable initialization
var wins = 0;
var losses = 0;
var timeoutLosses = 0;
var timeoutQuestion = 8;
var timeoutGameRefresh = 7;
var timeoutTimer = 0; 
var index = 0;
var indexQuestion = 0;
var timerStop = 0;
var timeout = false;
var turnRefresh1 = 0;

//Initialie the first  question

questionRefresh(index);
startTimer();

//continue game until all questions answered
if (index<question.length) {
    console.log("Index is: "+index);
    console.log("Number of questions is:"+question.length);   
    $(document).on('click', '.btn', function() {
        console.log("You clicked", $(this).val())
        valueIndex = $(this).val();
        if (valueIndex === correctAnswer[index]) {
            clearInterval(timerStop);
            timeoutTimer = 0;
            $("#message").html("Correct Answer <br>");
            wins++;
            //index++;
            console.log("Correct process complete");
            turnRefresh();
        } 
        else {
            clearInterval(timerStop);
            timeoutTimer = 0;
            $("#message").text("Incorrect Answer");
            $("#message").append("<br>The correct answer is: "+correctAnswerReturn()+"<br>");
            losses++;
            //index++;
            console.log("Wrong process complete");
            turnRefresh();

        }
    });
}  
  
//end of question sequence 
else {
    Console.log ("Programmer is lost");
    $("#message").html("Programmer is lost");
} 


function turnRefresh () {
    $("#questionDisplay").html("");
    $("#buttonDisplay").html("");
    //$("#timeLeft").text("");
    $("message").text("");
    index++;
    if(timeout) {
        losses++;
        timeoutLosses++;
        timeout=false;
        index--;
        $("#message").append("The correct answer is: "+correctAnswerReturn()+"<br>");
        index++;
        }
    if (index === question.length) {
        $("#message").append("You have completed the quiz. Your scores:<br>");
        $("#message").append("Correct Answers: "+wins+"<br>");
        $("#message").append("Wrong Answers: "+losses+"<br>");
        $("#message").append("Timeout Question: "+timeoutLosses);
        $("#message").append("<br>Game will automatically restart");
        index=0;
        wins=0;
        losses=0;
        timeoutLosses=0;
    }
    
    var turnRefresh1= setTimeout(function() {
        $("#message").html("");
        //index++;
        questionRefresh(index);
        startTimer();
      }, 5000);    
}
//question refresh function
function questionRefresh(indexQuestion) {
    $("#questionDisplay").text("");
    $("#questionDisplay").append("Question "+question[indexQuestion]+"<br><br>");
    $("#buttonDisplay").text("");
    $("#buttonDisplay").html("<br>");
    $("#buttonDisplay").append("<button id='answerA' class='btn btn-secondary' value='A'>" +aAnswer[indexQuestion]+ "</button><br><br>");
    $("#buttonDisplay").append("<button id='answerB' class='btn btn-secondary' value='B'>" +bAnswer[indexQuestion]+ "</button><br><br>");
    $("#buttonDisplay").append("<button id='answerC' class='btn btn-secondary' value='C'>" +cAnswer[indexQuestion]+ "</button><br><br>");
    $("#buttonDisplay").append("<button id='answerD' class='btn btn-secondary' value='D'>" +dAnswer[indexQuestion]+ "</button><br><br>");

}

function correctAnswerReturn() {
    if (correctAnswer[index]==="A") {
        return(aAnswer[index]);
    }
    if (correctAnswer[index]==="B") {
        return(bAnswer[index]);
    }
    if (correctAnswer[index]==="C") {
        return(cAnswer[index]);
    }
    if (correctAnswer[index]==="D") {
        return(dAnswer[index]);
    }
    
}



//Timer routine
function startTimer() {
    timerStop = setInterval (function() {
        timeoutTimer ++;
        $("#timeleft").html("Time Left: "+timeoutTimer);
        console.log(timeoutTimer);
        if (timeoutTimer === timeoutQuestion) {
            console.log("Done");
            timeoutTimer = 0;
            $("#message").html("Time out<br>");
            timeout=true;
            //$("#message").append("The correct answer is: "+correctAnswerReturn()+"<br>");
            //losses++;
            //timeoutLosses++;
            //index++;
            //console.log("Turn End "+turnEnd);
            //console.log("Time out "+timeoutEnd);
            console.log("Time out process complete");
            clearInterval(timerStop);
            turnRefresh();
        }
          timeLeft = timeoutQuestion-timeoutTimer;
          if (timeLeft>5) {
              $("#timeLeft").html("<div id = 'timeLeft' class='bg-warning'>Time Left: "+timeLeft+"</div>");
        }
        else {
            $("#timeLeft").html("<div id = 'timeLeft' class='bg-danger'>Time Left: "+timeLeft+"</div>");
        }
        }, 1000);
        
    }


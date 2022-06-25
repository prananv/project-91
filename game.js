player1score=0;
player2score=0;

playername1=localStorage.getItem("player1");
playername2=localStorage.getItem("player2");
 
document.getElementById("player1_name").innerHTML=playername1+" : ";
document.getElementById("player2_name").innerHTML=playername2+" : ";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn: "+playername1;
document.getElementById("answer").innerHTML="Answer turn: "+playername2;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML= row
}
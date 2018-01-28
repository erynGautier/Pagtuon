// questions.js
// Copyright © 2018 Eryn Gautier <egautier@hewittschool.org>
// License: GNU GPL

var questions = new Array();
//questions[0] = 'Solve for x: 3x = 15';
//questions[1] = 'Solve for x: 11x = 66';
questions[0] = 'Solve for x: 3x = 15';
questions[1] = 'Solve for x: 12 = x^2 + 6x + 5';
questions[2] = 'Solve for x: 8x - 8 = 3x + 37';
questions[3] = 'Solve for x: 2x + 8 = 20';
questions[4] = 'Solve for x: 6x + 9 = 39';
questions[5] = 'Solve for x: 3^2 + 4^2 = x^2';

var answers = new Array();
var x = new Array(6);
for (var i = 0; i < 6; i++) {
  x[i] = new Array(4);
}
var ans = new Array(2);
x[0][0] = 1;
x[0][1] = 5;
x[0][2] = 6;
x[0][3] = 9;
ans[0]=5;

x[1][0] = 1;
x[1][1] = 5;
x[1][2] = 6;
x[1][3] = 9;
ans[1]=1;

x[2][0] = 1;
x[2][1] = 5;
x[2][2] = 6;
x[2][3] = 9;
ans[2]=9;

x[3][0] = 1;
x[3][1] = 5;
x[3][2] = 6;
x[3][3] = 9;
ans[3]=6;

x[4][0] = 1;
x[4][1] = 5;
x[4][2] = 6;
x[4][3] = 9;
ans[4]=5;

x[5][0] = 1;
x[5][1] = 5;
x[5][2] = 6;
x[5][3] = 9;
ans[5]=5;

var click=0;

var i=0;

var score=0;

var bucks=0;

function show(){
        if(i<questions.length)
        { 
            document.getElementById("questionNumber").innerHTML = '<p>Question ' + (i+1) + '</p>';
            document.getElementById("question").innerHTML = '<p>' + questions[i] + '</p>';
            
            document.getElementById("answerChoice1").innerHTML='<button class="answerButton" onmouseover="hover1()" onmouseout="basic1()" onclick="clicked1()"><img src="answerBoxOne.PNG"></button>';
            document.getElementById("answerChoice2").innerHTML='<button class="answerButton" onmouseover="hover2()" onmouseout="basic2()" onclick="clicked2()"><img src="answerBoxFive.PNG"></button>';
            document.getElementById("answerChoice3").innerHTML='<button class="answerButton" onmouseover="hover3()" onmouseout="basic3()" onclick="clicked3()"><img src="answerBoxSix.PNG"></button>';
            document.getElementById("answerChoice4").innerHTML='<button class="answerButton" onmouseover="hover4()" onmouseout="basic4()" onclick="clicked4()"><img src="answerBoxNine.PNG"></button>';

            document.getElementById("nextButton").innerHTML = '<button id="next" onClick = "advance();"><img src="Next-Arrow.PNG"></button><br>';
        }
    
}


function clicked1()
{
    if (ans[i]==x[i][0])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="correctAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
      
      score++;
    }
    else if (ans[i]==x[i][1])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="correctAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][2])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="correctAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][3])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="correctAnswerBoxNine.PNG"></button>';
    }
  else
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
}

function clicked2()
{
    if (ans[i]==x[i][0])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="correctAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][1])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="correctAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
      
      score++;
    }
    else if (ans[i]==x[i][2])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="correctAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][3])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="correctAnswerBoxNine.PNG"></button>';
    }
  else
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
}

function clicked3()
{
    if (ans[i]==x[i][0])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="correctAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][1])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="correctAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][2])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="correctAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
      
      score++;
    }
    else if (ans[i]==x[i][3])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="correctAnswerBoxNine.PNG"></button>';
    }
  else
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="answerBoxNine.PNG"></button>';
    }
}

function clicked4()
{
    if (ans[i]==x[i][0])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="correctAnswerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][1])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="correctAnswerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][2])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="correctAnswerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxNine.PNG"></button>';
    }
    else if (ans[i]==x[i][3])
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="correctAnswerBoxNine.PNG"></button>';
      
      score++;
    }
  else
    {
      document.getElementById("answerChoice1").innerHTML='<button class="answerButton"><img src="answerBoxOne.PNG"></button>';
      document.getElementById("answerChoice2").innerHTML='<button class="answerButton"><img src="answerBoxFive.PNG"></button>';
      document.getElementById("answerChoice3").innerHTML='<button class="answerButton"><img src="answerBoxSix.PNG"></button>';
      document.getElementById("answerChoice4").innerHTML='<button class="answerButton"><img src="wrongAnswerBoxNine.PNG"></button>';
    }
}

function hover1(){
    document.getElementById("answerChoice1").innerHTML='<button class="answerButton" onmouseout="basic1()" onclick="clicked1()"><img src="hoverAnswerBoxOne.PNG"></button>';
}
function basic1(){
    document.getElementById("answerChoice1").innerHTML='<button class="answerButton" onmouseover="hover1()" onmouseout="basic1()" onclick="clicked1()"><img src="answerBoxOne.PNG"></button>';
}

function hover2(){
    document.getElementById("answerChoice2").innerHTML='<button class="answerButton" onmouseout="basic2()" onclick="clicked2()"><img src="hoverAnswerBoxFive.PNG"></button>';
}
function basic2(){
    document.getElementById("answerChoice2").innerHTML='<button class="answerButton" onmouseover="hover2()" onmouseout="basic2()" onclick="clicked2()"><img src="answerBoxFive.PNG"></button>';
}

function hover3(){
    document.getElementById("answerChoice3").innerHTML='<button class="answerButton" onmouseout="basic3()" onclick="clicked3()"><img src="hoverAnswerBoxSix.PNG"></button>';
}
function basic3(){
    document.getElementById("answerChoice3").innerHTML='<button class="answerButton" onmouseover="hover3()" onmouseout="basic3()" onclick="clicked3()"><img src="answerBoxSix.PNG"></button>';
}

function hover4(){
    document.getElementById("answerChoice4").innerHTML='<button class="answerButton" onmouseout="basic4()" onclick="clicked4()"><img src="hoverAnswerBoxNine.PNG"></button>';
}
function basic4(){
    document.getElementById("answerChoice4").innerHTML='<button class="answerButton" onmouseover="hover4()" onmouseout="basic4()" onclick="clicked4()"><img src="answerBoxNine.PNG"></button>';
}

function advance() {
    i++;
    if (i == questions.length) {
        document.getElementById("questionNumber").innerHTML = '<p style="display:none;"></p>';
        document.getElementById("question").innerHTML = '<p style="display:none;"></p>';
            
        document.getElementById("answerChoice1").innerHTML='<div style="display:none;"></div>';
        document.getElementById("answerChoice2").innerHTML='<div style="display:none;"></div>';
        document.getElementById("answerChoice3").innerHTML='<div style="display:none;"></div>';
        document.getElementById("answerChoice4").innerHTML='<div style="display:none;"></div>';

        document.getElementById("nextButton").innerHTML = '<div style="display:none;"></div>';

        // -------------------

        document.getElementById("winner").innerHTML='<img src="penguin-avatar.PNG"><p>WAITING FOR OPPONENT ...</p><img src="default-avatar.PNG">'
        document.getElementById("level").innerHTML='<p id="level">You earned ' + (score*5) + ' points. Win 16 more points to reach level 6!</p>'
        document.getElementById("progressBar").innerHTML='<div class="meter"><span style="width: 90%"></span></div>'
        document.getElementById("coins").innerHTML='<img src="coins.PNG"><p> +' + (score*12) + '</p>'
        if(score==i){
            bucks++;
            document.getElementById("bucks").innerHTML='<img src="dollar.PNG"><p> +' + (bucks) + '</p>'
        }

        document.getElementById("leaderboard").innerHTML='<table id="leaderboard" style="width:100%; margin-bottom:3em;"><tr><th style="width:3em; color:#fcc29c;">#1</th><th style="width:15em;"><img src="penguin-avatar.PNG"></th><th>level 5</th><th style="width:10em;">1378 coins</th><th style="width:10em;">312 bucks</th></tr><tr><th style="width:3em;">#2</th><th style="width:15em;"><img src="default-avatar.PNG"></th><th>level 3</th><th style="width:10em;">143 coins</th><th style="width:10em;">15 bucks</th></tr></table>';
        end();
    } else {
        show();
    }
}

function expandIt(BlockName) {
            
            img = eval('document.img_'+BlockName);
            
            if (document.getElementById(BlockName).style.display == "block") {
                document.getElementById(BlockName).style.display = "none";
            }
            else {
                document.getElementById(BlockName).style.display = "block";
            }
        }

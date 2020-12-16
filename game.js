var character = document.getElementById("character");
var block = document.getElementById("block");
var scorebox = document.getElementById("scorebox");
var gamebox = document.getElementById("game");
var body = document.getElementsByTagName("body");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}
var frames=6;
var charsrc = "img/charb0";
var score = 0;
var highscore =0;
var run;
var listen_choice;
//animate character
function start(){
    document.getElementsByTagName("button")[0].innerText="Resume";
    document.getElementById('msg').style.visibility="hidden";
    clearInterval(listen_choice);
    clearInterval(run);
    document.getElementById("choice").style.visibility = "hidden";
    block.style.animation = "block 1200ms infinite linear";
    var i =1;
    run = setInterval(function (){
        if(i>frames){
            i=1;
        }
        character.src= charsrc+i+".png";
        i++;
        score +=10;
        scorebox.innerText = "Score : "+score;
    },80);
}

function pause(){
    var body = document.getElementsByTagName("body");
    document.getElementById("choice").style.visibility="visible";
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    block.style.animation = "none";
    block.style.left = blockleft;
    clearInterval(run);
    clearInterval(listen_choice);
    listen_choice = setInterval( function(){
    if (document.getElementById("nightmode").checked){
        body[0].style.backgroundColor = "black";
        body[0].style.color = "white";
    }
    else{
        body[0].style.backgroundColor = "white";
        body[0].style.color = "black";
    }
    if (document.getElementById('boy').checked){
        frames = 6;
        charsrc = "img/charb0";
        character.src = "img/charb01.png";
    }
    if (document.getElementById('cyborg').checked){
        frames = 8;
        charsrc = "img/chara0";
        character.src = "img/chara01.png";
    }
    if (document.getElementById('man').checked){
        frames = 10;
        charsrc = "img/charc0";
        character.src = "img/charc01.png";
    }
    },10);
}
start();
var checkDead = setInterval(function(){
    var chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft < 30 && blockleft > 0 && chartop>=130){
        if(score>highscore){
            highscore = score;
            document.getElementById("highscorebox").innerText = "High Score : "+highscore;
        }
        document.getElementsByTagName("button")[0].innerText="Start";
        document.getElementById('msg').style.visibility="visible";
        document.getElementById("msg").innerText='You Lose\nYour Score '+score;
        score=0;
        block.style.animation = "none";
        //block.style.left = window.width-20;
        scorebox.innerText = "score : 0";
        clearInterval(run);
    }
},10)

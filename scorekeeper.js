var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var inputnum = document.querySelector("input[type='number']");
var winningscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var resetbutton = document.querySelector("#reset");
var gameover = false;
var winningscore = 5;

p1button.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(p1score === winningscore){
			p1display.classList.add("winner");
			gameover = true;
		}
	}
	
	p1display.textContent = p1score;
});

p2button.addEventListener("click",function(){
	if(!gameover){
		p2score++;
		if(p2score === winningscore){
			p2display.classList.add("winner");
			gameover = true;
		}
	}
	p2display.textContent = p2score;
});

resetbutton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score=0;
	p2score=0;
	p1display.textContent= p1score;
	p2display.textContent= p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover= false;
}

inputnum.addEventListener("change",function(){
	winningscoredisplay.textContent= this.value;
	winningscore=Number(this.value);
	reset();

});
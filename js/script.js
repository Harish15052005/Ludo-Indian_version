//start variables
var startGame = document.querySelector('.startGame');
var container = document.querySelector('.container');

// winnig variables
var redw = document.querySelector('.redw');
var yelloww = document.querySelector('.yelloww');
var bluew = document.querySelector('.bluew');
var greenw = document.querySelector('.greenw');

//  goti variables
var redgoti = document.getElementById('gotired');
var bluegoti = document.getElementById('gotiblue');
var greengoti = document.getElementById('gotigreen');
var yellowgoti = document.getElementById('gotiyellow');

// display variables
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');

// button variables
var redbutton = document.querySelector('.dicered');
var bluebutton = document.querySelector('.diceblue');
var greenbutton = document.querySelector('.dicegreen');
var yellowbutton = document.querySelector('.diceyellow');

// input variables
var redinput = document.getElementById('dicevaluered');
var yellowinput = document.getElementById('dicevalueyellow');
var greeninput = document.getElementById('dicevaluegreen');
var blueinput = document.getElementById('dicevalueblue');

//pn variables
pnr = 0;
pny = 0;
png = 0;
pnb = 0;

//event listeners
redbutton.addEventListener('click' , moveredgoti);
bluebutton.addEventListener('click' , movebluegoti);
greenbutton.addEventListener('click' , movegreengoti);
yellowbutton.addEventListener('click' , moveyellowgoti);
startGame.addEventListener('click' , StartGame)

// start game funciton
function StartGame(){
	startGame.style.display = "none";
	red.style.transform = "scale(1)"
}

// move funcitons 
function moveredgoti(){
	// p variables
	var p0 = document.querySelector('.box3');
	var p1 = document.querySelector('.box2');
	var p2 = document.querySelector('.box1');
	var p3 = document.querySelector('.box6');
	var p4 = document.querySelector('.box11');
	var p5 = document.querySelector('.box16');
	var p6 = document.querySelector('.box21');
	var p7 = document.querySelector('.box22');
	var p8 = document.querySelector('.box23');
	var p9 = document.querySelector('.box24');
	var p10 = document.querySelector('.box25');
	var p11 = document.querySelector('.box20');
	var p12 = document.querySelector('.box15');
	var p13 = document.querySelector('.box10');
	var p14 = document.querySelector('.box5');
	var p15 = document.querySelector('.box4');
	var p16 = document.querySelector('.box9');
	var p17 = document.querySelector('.box14');
	var p18 = document.querySelector('.box19');
	var p19 = document.querySelector('.box18');
	var p20 = document.querySelector('.box17');
	var p21 = document.querySelector('.box12');
	var p22 = document.querySelector('.box7');
	var p23 = document.querySelector('.box8');
	var p24 = document.querySelector('.box13');
	// function for dice roll
	var qwe = Math.floor(Math.random() * 4 + 1);
	redinput.value = qwe;
	// position variable
	var position = p0;
	pnr += qwe;
	// if conditions
	if (pnr == 0) {
		redgoti.remove();
		position = p0;
		position.appendChild(redgoti)
	};
	if (pnr == 1) {
		redgoti.remove();
		position = p1;
		position.appendChild(redgoti)
	};
	if (pnr == 2) {
		redgoti.remove();
		position = p2;
		position.appendChild(redgoti)
	};
	if (pnr == 3) {
		redgoti.remove();
		position = p3;
		position.appendChild(redgoti)
	};
	if (pnr == 4) {
		redgoti.remove();
		position = p4;
		position.appendChild(redgoti)
	};
	if (pnr == 5) {
		redgoti.remove();
		position = p5;
		position.appendChild(redgoti)
	};
	if (pnr == 6) {
		redgoti.remove();
		position = p6;
		position.appendChild(redgoti)
	};
	if (pnr == 7) {
		redgoti.remove();
		position = p7;
		position.appendChild(redgoti)
	};
	if (pnr == 8) {
		redgoti.remove();
		position = p8;
		position.appendChild(redgoti)
	};
	if (pnr == 9) {
		redgoti.remove();
		position = p9;
		position.appendChild(redgoti)
	};
	if (pnr == 10) {
		redgoti.remove();
		position = p7;
		position.appendChild(redgoti)
	};
	if (pnr == 11) {
		redgoti.remove();
		position = p11;
		position.appendChild(redgoti)
	};
	if (pnr == 12) {
		redgoti.remove();
		position = p12;
		position.appendChild(redgoti)
	};
	if (pnr == 13) {
		redgoti.remove();
		position = p13;
		position.appendChild(redgoti)
	};
	if (pnr == 14) {
		redgoti.remove();
		position = p14;
		position.appendChild(redgoti)
	};
	if (pnr == 15) {
		redgoti.remove();
		position = p15;
		position.appendChild(redgoti)
	};
	if (pnr == 16) {
		redgoti.remove();
		position = p16;
		position.appendChild(redgoti)
	};
	if (pnr == 17) {
		redgoti.remove();
		position = p17;
		position.appendChild(redgoti)
	};
	if (pnr == 18) {
		redgoti.remove();
		position = p18;
		position.appendChild(redgoti)
	};
	if (pnr == 19) {
		redgoti.remove();
		position = p19;
		position.appendChild(redgoti)
	};
	if (pnr == 20) {
		redgoti.remove();
		position = p20;
		position.appendChild(redgoti)
	};
	if (pnr == 21) {
		redgoti.remove();
		position = p21;
		position.appendChild(redgoti)
	};
	if (pnr == 22) {
		redgoti.remove();
		position = p22;
		position.appendChild(redgoti)
	};
	if (pnr == 23) {
		redgoti.remove();
		position = p23;
		position.appendChild(redgoti)
	};
	if (pnr == 24) {
		redgoti.remove();
		position = p24;
		position.appendChild(redgoti)
	};
	if (pnr > 24) {
		pnr = 23;
	};
	//winning function for red;
	if (pnr == 24) {
		setTimeout(function(){
			container.style.display = "none";
			redw.style.height = '100vh';
		},2000);
	}
	if (redinput.value == 4) {
    green.style.transform = 'scale(0)';
    blue.style.transform = 'scale(0)';
    yellow.style.transform = 'scale(0)';
    red.style.transform = 'scale(1)';
    	console.log('hiii')
	}else {
	// display
    green.style.transform = 'scale(1)';
    blue.style.transform = 'scale(0)';
    yellow.style.transform = 'scale(0)';
    setTimeout(function(){
    	red.style.transform = 'scale(0)';
    },700)
	}
};


function moveyellowgoti(){
	// p variables
	var p0 = document.querySelector('.box23');
	var p1 = document.querySelector('.box24');
	var p2 = document.querySelector('.box25');
	var p3 = document.querySelector('.box20');
	var p4 = document.querySelector('.box15');
	var p5 = document.querySelector('.box10');
	var p6 = document.querySelector('.box5');
	var p7 = document.querySelector('.box4');
	var p8 = document.querySelector('.box3');
	var p9 = document.querySelector('.box2');
	var p10 = document.querySelector('.box1');
	var p11 = document.querySelector('.box6');
	var p12 = document.querySelector('.box11');
	var p13 = document.querySelector('.box16');
	var p14 = document.querySelector('.box21');
	var p15 = document.querySelector('.box22');
	var p16 = document.querySelector('.box17');
	var p17 = document.querySelector('.box12');
	var p18 = document.querySelector('.box7');
	var p19 = document.querySelector('.box8');
	var p20 = document.querySelector('.box9');
	var p21 = document.querySelector('.box14');
	var p22 = document.querySelector('.box19');
	var p23 = document.querySelector('.box18');
	var p24 = document.querySelector('.box13');
	// function for dice roll
	var wwe = Math.floor(Math.random() * 4 + 1);
	yellowinput.value = wwe;
	// position variable
	var position = p0;
	pny += wwe;
	// if conditions
	if (pny == 0) {
		yellowgoti.remove();
		position = p0;
		position.appendChild(yellowgoti)
	};
	if (pny == 1) {
		yellowgoti.remove();
		position = p1;
		position.appendChild(yellowgoti)
	};
	if (pny == 2) {
		yellowgoti.remove();
		position = p2;
		position.appendChild(yellowgoti)
	};
	if (pny == 3) {
		yellowgoti.remove();
		position = p3;
		position.appendChild(yellowgoti)
	};
	if (pny == 4) {
		yellowgoti.remove();
		position = p4;
		position.appendChild(yellowgoti)
	};
	if (pny == 5) {
		yellowgoti.remove();
		position = p5;
		position.appendChild(yellowgoti)
	};
	if (pny == 6) {
		yellowgoti.remove();
		position = p6;
		position.appendChild(yellowgoti)
	};
	if (pny == 7) {
		yellowgoti.remove();
		position = p7;
		position.appendChild(yellowgoti)
	};
	if (pny == 8) {
		yellowgoti.remove();
		position = p8;
		position.appendChild(yellowgoti)
	};
	if (pny == 9) {
		yellowgoti.remove();
		position = p9;
		position.appendChild(yellowgoti)
	};
	if (pny == 10) {
		yellowgoti.remove();
		position = p7;
		position.appendChild(yellowgoti)
	};
	if (pny == 11) {
		yellowgoti.remove();
		position = p11;
		position.appendChild(yellowgoti)
	};
	if (pny == 12) {
		yellowgoti.remove();
		position = p12;
		position.appendChild(yellowgoti)
	};
	if (pny == 13) {
		yellowgoti.remove();
		position = p13;
		position.appendChild(yellowgoti)
	};
	if (pny == 14) {
		yellowgoti.remove();
		position = p14;
		position.appendChild(yellowgoti)
	};
	if (pny == 15) {
		yellowgoti.remove();
		position = p15;
		position.appendChild(yellowgoti)
	};
	if (pny == 16) {
		yellowgoti.remove();
		position = p16;
		position.appendChild(yellowgoti)
	};
	if (pny == 17) {
		yellowgoti.remove();
		position = p17;
		position.appendChild(yellowgoti)
	};
	if (pny == 18) {
		yellowgoti.remove();
		position = p18;
		position.appendChild(yellowgoti)
	};
	if (pny == 19) {
		yellowgoti.remove();
		position = p19;
		position.appendChild(yellowgoti)
	};
	if (pny == 20) {
		yellowgoti.remove();
		position = p20;
		position.appendChild(yellowgoti)
	};
	if (pny == 21) {
		yellowgoti.remove();
		position = p21;
		position.appendChild(yellowgoti)
	};
	if (pny == 22) {
		yellowgoti.remove();
		position = p22;
		position.appendChild(yellowgoti)
	};
	if (pny == 23) {
		yellowgoti.remove();
		position = p23;
		position.appendChild(yellowgoti)
	};
	if (pny == 24) {
		yellowgoti.remove();
		position = p24;
		position.appendChild(yellowgoti)
	};
	if (pny > 24) {
		pny = 23;
	};
	//winning function for red;
	if (pny == 24) {
		setTimeout(function(){
			container.style.display = "none";
			yelloww.style.height = '100vh';
		},2000);
	}
	if (yellowinput.value == 4) {
    green.style.transform = 'scale(0)';
    blue.style.transform = 'scale(0)';
    yellow.style.transform = 'scale(1)';
    	red.style.transform = 'scale(0)';
	}else {
	// display
    blue.style.transform = 'scale(1)';
    green.style.transform = 'scale(0)';
    red.style.transform = 'scale(0)';
    setTimeout(function(){
    	yellow.style.transform = 'scale(0)';
    },500)
	}
};


function movebluegoti(){
	// p variables
	var p0 = document.querySelector('.box11');
	var p1 = document.querySelector('.box16');
	var p2 = document.querySelector('.box21');
	var p3 = document.querySelector('.box22');
	var p4 = document.querySelector('.box23');
	var p5 = document.querySelector('.box24');
	var p6 = document.querySelector('.box25');
	var p7 = document.querySelector('.box20');
	var p8 = document.querySelector('.box15');
	var p9 = document.querySelector('.box10');
	var p10 = document.querySelector('.box5');
	var p11 = document.querySelector('.box4');
	var p12 = document.querySelector('.box3');
	var p13 = document.querySelector('.box2');
	var p14 = document.querySelector('.box1');
	var p15 = document.querySelector('.box6');
	var p16 = document.querySelector('.box7');
	var p17 = document.querySelector('.box8');
	var p18 = document.querySelector('.box9');
	var p19 = document.querySelector('.box14');
	var p20 = document.querySelector('.box19');
	var p21 = document.querySelector('.box18');
	var p22 = document.querySelector('.box17');
	var p23 = document.querySelector('.box12');
	var p24 = document.querySelector('.box13');
	// function for dice roll
	var awe = Math.floor(Math.random() * 4 + 1);
	blueinput.value = awe;
	// position variable
	var position = p0;
	pnb += awe;
	// if conditions
	if (pnb == 0) {
		bluegoti.remove();
		position = p0;
		position.appendChild(bluegoti)
	};
	if (pnb == 1) {
		bluegoti.remove();
		position = p1;
		position.appendChild(bluegoti)
	};
	if (pnb == 2) {
		bluegoti.remove();
		position = p2;
		position.appendChild(bluegoti)
	};
	if (pnb == 3) {
		bluegoti.remove();
		position = p3;
		position.appendChild(bluegoti)
	};
	if (pnb == 4) {
		bluegoti.remove();
		position = p4;
		position.appendChild(bluegoti)
	};
	if (pnb == 5) {
		bluegoti.remove();
		position = p5;
		position.appendChild(bluegoti)
	};
	if (pnb == 6) {
		bluegoti.remove();
		position = p6;
		position.appendChild(bluegoti)
	};
	if (pnb == 7) {
		bluegoti.remove();
		position = p7;
		position.appendChild(bluegoti)
	};
	if (pnb == 8) {
		bluegoti.remove();
		position = p8;
		position.appendChild(bluegoti)
	};
	if (pnb == 9) {
		bluegoti.remove();
		position = p9;
		position.appendChild(bluegoti)
	};
	if (pnb == 10) {
		bluegoti.remove();
		position = p7;
		position.appendChild(bluegoti)
	};
	if (pnb == 11) {
		bluegoti.remove();
		position = p11;
		position.appendChild(bluegoti)
	};
	if (pnb == 12) {
		bluegoti.remove();
		position = p12;
		position.appendChild(bluegoti)
	};
	if (pnb == 13) {
		bluegoti.remove();
		position = p13;
		position.appendChild(bluegoti)
	};
	if (pnb == 14) {
		bluegoti.remove();
		position = p14;
		position.appendChild(bluegoti)
	};
	if (pnb == 15) {
		bluegoti.remove();
		position = p15;
		position.appendChild(bluegoti)
	};
	if (pnb == 16) {
		bluegoti.remove();
		position = p16;
		position.appendChild(bluegoti)
	};
	if (pnb == 17) {
		bluegoti.remove();
		position = p17;
		position.appendChild(bluegoti)
	};
	if (pnb == 18) {
		bluegoti.remove();
		position = p18;
		position.appendChild(bluegoti)
	};
	if (pnb == 19) {
		bluegoti.remove();
		position = p19;
		position.appendChild(bluegoti)
	};
	if (pnb == 20) {
		bluegoti.remove();
		position = p20;
		position.appendChild(bluegoti)
	};
	if (pnb == 21) {
		bluegoti.remove();
		position = p21;
		position.appendChild(bluegoti)
	};
	if (pnb == 22) {
		bluegoti.remove();
		position = p22;
		position.appendChild(bluegoti)
	};
	if (pnb == 23) {
		bluegoti.remove();
		position = p23;
		position.appendChild(bluegoti)
	};
	if (pnb == 24) {
		bluegoti.remove();
		position = p24;
		position.appendChild(bluegoti)
	};
	if (pnb > 24) {
		pnb = 23;
	};
	//winning function for red;
	if (pnb == 24) {
		setTimeout(function(){
			container.style.display = "none";
			bluew.style.height = '100vh';
		},2000);
	}
	if (blueinput.value == 4) {
    green.style.transform = 'scale(0)';
    blue.style.transform = 'scale(1)';
    yellow.style.transform = 'scale(0)';
    	red.style.transform = 'scale(0)';
	}else {
	// display
    red.style.transform = 'scale(1)';
    green.style.transform = 'scale(0)';
    yellow.style.transform = 'scale(0)';
    setTimeout(function(){
    	blue.style.transform = 'scale(0)';
    },500)	}
};


function movegreengoti(){
	// p variables
	var p0 = document.querySelector('.box15');
	var p1 = document.querySelector('.box10');
	var p2 = document.querySelector('.box5');
	var p3 = document.querySelector('.box4');
	var p4 = document.querySelector('.box3');
	var p5 = document.querySelector('.box2');
	var p6 = document.querySelector('.box1');
	var p7 = document.querySelector('.box6');
	var p8 = document.querySelector('.box11');
	var p9 = document.querySelector('.box16');
	var p10 = document.querySelector('.box21');
	var p11 = document.querySelector('.box22');
	var p12 = document.querySelector('.box23');
	var p13 = document.querySelector('.box24');
	var p14 = document.querySelector('.box25');
	var p15 = document.querySelector('.box20');
	var p16 = document.querySelector('.box19');
	var p17 = document.querySelector('.box18');
	var p18 = document.querySelector('.box17');
	var p19 = document.querySelector('.box12');
	var p20 = document.querySelector('.box7');
	var p21 = document.querySelector('.box8');
	var p22 = document.querySelector('.box9');
	var p23 = document.querySelector('.box14');
	var p24 = document.querySelector('.box13');
	// function for dice roll
	var vwe = Math.floor(Math.random() * 4 + 1);
	greeninput.value = vwe;
	// position variable
	var position = p0;
	png += vwe;
	// if conditions
	if (png == 0) {
		greengoti.remove();
		position = p0;
		position.appendChild(greengoti)
	};
	if (png == 1) {
		greengoti.remove();
		position = p1;
		position.appendChild(greengoti)
	};
	if (png == 2) {
		greengoti.remove();
		position = p2;
		position.appendChild(greengoti)
	};
	if (png == 3) {
		greengoti.remove();
		position = p3;
		position.appendChild(greengoti)
	};
	if (png == 4) {
		greengoti.remove();
		position = p4;
		position.appendChild(greengoti)
	};
	if (png == 5) {
		greengoti.remove();
		position = p5;
		position.appendChild(greengoti)
	};
	if (png == 6) {
		greengoti.remove();
		position = p6;
		position.appendChild(greengoti)
	};
	if (png == 7) {
		greengoti.remove();
		position = p7;
		position.appendChild(greengoti)
	};
	if (png == 8) {
		greengoti.remove();
		position = p8;
		position.appendChild(greengoti)
	};
	if (png == 9) {
		greengoti.remove();
		position = p9;
		position.appendChild(greengoti)
	};
	if (png == 10) {
		greengoti.remove();
		position = p7;
		position.appendChild(greengoti)
	};
	if (png == 11) {
		greengoti.remove();
		position = p11;
		position.appendChild(greengoti)
	};
	if (png == 12) {
		greengoti.remove();
		position = p12;
		position.appendChild(greengoti)
	};
	if (png == 13) {
		greengoti.remove();
		position = p13;
		position.appendChild(greengoti)
	};
	if (png == 14) {
		greengoti.remove();
		position = p14;
		position.appendChild(greengoti)
	};
	if (png == 15) {
		greengoti.remove();
		position = p15;
		position.appendChild(greengoti)
	};
	if (png == 16) {
		greengoti.remove();
		position = p16;
		position.appendChild(greengoti)
	};
	if (png == 17) {
		greengoti.remove();
		position = p17;
		position.appendChild(greengoti)
	};
	if (png == 18) {
		greengoti.remove();
		position = p18;
		position.appendChild(greengoti)
	};
	if (png == 19) {
		greengoti.remove();
		position = p19;
		position.appendChild(greengoti)
	};
	if (png == 20) {
		greengoti.remove();
		position = p20;
		position.appendChild(greengoti)
	};
	if (png == 21) {
		greengoti.remove();
		position = p21;
		position.appendChild(greengoti)
	};
	if (png == 22) {
		greengoti.remove();
		position = p22;
		position.appendChild(greengoti)
	};
	if (png == 23) {
		greengoti.remove();
		position = p23;
		position.appendChild(greengoti)
	};
	if (png == 24) {
		greengoti.remove();
		position = p24;
		position.appendChild(greengoti)
	};
	if (png > 24) {
		png = 23;
	};
	//winning function for red;
	if (png == 24) {
		setTimeout(function(){
			container.style.display = "none";
		},2000);
		greenw.style.height = '100vh';
	}
	if (greeninput.value == 4) {
    green.style.transform = 'scale(1)';
    blue.style.transform = 'scale(0)';
    yellow.style.transform = 'scale(0)';
    	red.style.transform = 'scale(0)';
	}else {
	// display
    yellow.style.transform = 'scale(1)';
    blue.style.transform = 'scale(0)';
    red.style.transform = 'scale(0)';
    setTimeout(function(){
    	green.style.transform = 'scale(0)';
    },500)
	};
};

// append child function
redw.addEventListener("mousemove",function(e){
			var bubbles = document.createElement("span");
			bubbles.setAttribute('class' , 'bubbles');
			var x = e.offsetX;
			var y =e.offsetY;
			var size = Math.random() * 100;
			bubbles.style.left = x + 'px ';
			bubbles.style.top = y + 'px';
			bubbles.style.width = 20 + size + 'px';
			bubbles.style.height =20 +  size + 'px';
			redw.appendChild(bubbles);

			setTimeout(function(){
				bubbles.remove();
			},4000)
	})
greenw.addEventListener("mousemove",function(e){
			var bubbles = document.createElement("span");
			bubbles.setAttribute('class' , 'bubbles');
			var x = e.offsetX;
			var y =e.offsetY;
			var size = Math.random() * 100;
			bubbles.style.left = x + 'px ';
			bubbles.style.top = y + 'px';
			bubbles.style.width = 20 + size + 'px';
			bubbles.style.height =20 +  size + 'px';
			greenw.appendChild(bubbles);

			setTimeout(function(){
				bubbles.remove();
			},4000)
	})
bluew.addEventListener("mousemove",function(e){
			var bubbles = document.createElement("span");
			bubbles.setAttribute('class' , 'bubbles');
			var x = e.offsetX;
			var y =e.offsetY;
			var size = Math.random() * 100;
			bubbles.style.left = x + 'px ';
			bubbles.style.top = y + 'px';
			bubbles.style.width = 20 + size + 'px';
			bubbles.style.height =20 +  size + 'px';
			bluew.appendChild(bubbles);

			setTimeout(function(){
				bubbles.remove();
			},4000)
	})
yelloww.addEventListener("mousemove",function(e){
			var bubbles = document.createElement("span");
			bubbles.setAttribute('class' , 'bubbles');
			var x = e.offsetX;
			var y =e.offsetY;
			var size = Math.random() * 100;
			bubbles.style.left = x + 'px ';
			bubbles.style.top = y + 'px';
			bubbles.style.width = 20 + size + 'px';
			bubbles.style.height =20 +  size + 'px';
			yelloww.appendChild(bubbles);

			setTimeout(function(){
				bubbles.remove();
			},4000)
	})

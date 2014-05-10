/*
     Name: Toby Cortez
     Date: 5/6/2014
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
if(Modernizr.canvas){

	

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
	var c1 = document.getElementById('Canvas1');
	var c1ctx = c1.getContext('2d');
	
	c1ctx.fillStyle = 'blue';
	c1ctx.strokeStyle = '#000000';
	c1ctx.lineWidth = 1;
	
	c1ctx.fillRect(0,0, 50,100);
	c1ctx.strokeRect(0,0, 50,100);
	
	

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var c2 = document.getElementById('Canvas2');
	var c2ctx = c2.getContext('2d');
	
	c2ctx.fillStyle = 'rgba(255,0,0,.5)';
	c2ctx.strokeStyle = '#000000';
	
	c2ctx.beginPath();
	c2ctx.arc(50,50,20, 0,2*Math.PI);
	c2ctx.fill();
	
	c2ctx.beginPath();
	c2ctx.arc(50,50,30, 0,2*Math.PI);
	c2ctx.stroke();
		
	
	



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var c3 = document.getElementById('Canvas3');
	var c3ctx = c3.getContext('2d');
	
	c3ctx.fillStyle = 'yellow';
	c3ctx.strokeStyle = 'red';
	
	c3ctx.beginPath();
	c3ctx.moveTo(100,100);
	
	c3ctx.lineTo(120,20);
	c3ctx.lineTo(140,100);
	
	c3ctx.lineTo(220,100);
	c3ctx.lineTo(150,140);

	c3ctx.lineTo(200,200);
	c3ctx.lineTo(120,160);

	c3ctx.lineTo(70,200);
	c3ctx.lineTo(90,140);
	
	c3ctx.lineTo(30,100);
	c3ctx.closePath();

	c3ctx.stroke();
	c3ctx.fill();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	var c4 = document.getElementById('Canvas4');
	var c4ctx = c4.getContext('2d');
	
	c4ctx.fillStyle = 'green';
	c4ctx.strokeStyle = 'blue';
	
	c4ctx.beginPath();
	c4ctx.arc(180,150,80, 0,1*Math.PI, true);
	
	c4ctx.moveTo(100,150);
					
	c4ctx.bezierCurveTo(110,130, 130,130, 140, 150);
	c4ctx.bezierCurveTo(150,130, 170,130, 180, 150);
	c4ctx.bezierCurveTo(190,130, 210,130, 220, 150);
	c4ctx.bezierCurveTo(220,130, 250,130, 260, 150);
								
	c4ctx.stroke();
	c4ctx.fill();
	
	
	
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var c5 = document.getElementById('Canvas5');
	var c5ctx = c5.getContext('2d');
	
	c5ctx.fillStyle = 'blue';

	c5ctx.font = '25pt Georgia';
	c5ctx.fillText('Hello World!', 20,60);




/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
	var c6 = document.getElementById('Canvas6');
	var c6ctx = c6.getContext('2d');
	
	var srcImg = document.getElementById('img1');
	
	c6ctx.drawImage(srcImg, 0, 0);
	c6ctx.drawImage(srcImg, 0, 1080, 1650, 544);
	c6ctx.drawImage(srcImg, 310,595, 330,410, 0,1700, 180,200);

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var c7 = document.getElementById('Canvas7');
	var c7ctx = c7.getContext('2d');
	
	c7ctx.fillStyle = 'rgba(255,0,0,.5)';
	c7ctx.strokeStyle = '#000000';
	
	c7ctx.beginPath();
	c7ctx.arc(100,200,20, 0,2*Math.PI);
	c7ctx.fill();
	c7ctx.stroke();
	
	c7ctx.beginPath();
	c7ctx.arc(200,200,20, 0,2*Math.PI);
	c7ctx.fill();
	c7ctx.stroke();
	
	c7ctx.fillStyle = 'blue';

	c7ctx.beginPath();
	c7ctx.moveTo(20,200);
	c7ctx.lineTo(20,140);
	c7ctx.lineTo(140,140);
	c7ctx.lineTo(140,80);
	c7ctx.lineTo(240,80);
	c7ctx.lineTo(240,200);
	c7ctx.lineTo(225,200);
	c7ctx.arc(199,200,25, 0,1*Math.PI, true);
	c7ctx.lineTo(125,200);
	c7ctx.arc(99,200,25, 0,1*Math.PI, true);
	c7ctx.closePath();
	
	c7ctx.fill();
	c7ctx.stroke();
	
	c7ctx.fillStyle = '#cccccc';
	
	c7ctx.fillRect(180,100, 50,40);
	c7ctx.strokeRect(180,100, 50,40);
	


	
	
	
	}else{
		alert('Canvas Is Not Supported By Your Browser!');
	};



$(document).ready(function(){		
                 
	$(".img1").click(function(){
			$(".img1").fadeTo(1000, 0);	
			console.log('click');		
		});
		
	$(".img2").click(function(){
			$(".img2").fadeTo(1000, 0);
			console.log('click');		
		});
		
	$(".img3").click(function(){
			$(".img3").fadeTo(1000, 0);
			console.log('click');		
		});
		
	$(".btn").click(function(){
		$(".img1").fadeTo(1000, 1);
		$(".img2").fadeTo(1000, 1);
		$(".img3").fadeTo(1000, 1);
	});
});

if(Modernizr.canvas){

	var c1 = document.getElementById('canvas1');
	var c1ctx = c1.getContext('2d');

	var c2 = document.getElementById('canvas2');
	var c2ctx = c2.getContext('2d');

	c1ctx.fillStyle="rgb(0,0,0)";
	c1ctx.beginPath();
	c1ctx.moveTo(18,81);
	c1ctx.bezierCurveTo(18,69,22,57,31,45);
	c1ctx.bezierCurveTo(41,32,50,25,59,22);
	c1ctx.bezierCurveTo(63,20,69,19,77,18);
	c1ctx.bezierCurveTo(84,17,91,16,95,16);
	c1ctx.bezierCurveTo(98,16,99,16,101,17);
	c1ctx.bezierCurveTo(104,17,108,22,115,31);
	c1ctx.bezierCurveTo(116,34,119,37,122,42);
	c1ctx.bezierCurveTo(126,46,129,50,132,54);
	c1ctx.bezierCurveTo(134,57,137,61,140,64);
	c1ctx.bezierCurveTo(140,65,142,66,144,69);
	c1ctx.bezierCurveTo(147,72,149,74,150,76);
	c1ctx.bezierCurveTo(151,78,152,79,152,81);
	c1ctx.bezierCurveTo(152,84,149,87,144,91);
	c1ctx.bezierCurveTo(139,95,134,98,128,101);
	c1ctx.bezierCurveTo(122,105,117,108,112,112);
	c1ctx.bezierCurveTo(107,115,104,118,104,120);
	c1ctx.bezierCurveTo(104,122,105,123,106,125);
	c1ctx.bezierCurveTo(107,126,107,128,108,129);
	c1ctx.bezierCurveTo(108,130,110,131,112,133);
	c1ctx.bezierCurveTo(113,135,114,137,115,137);
	c1ctx.bezierCurveTo(128,155,143,170,160,182);
	c1ctx.bezierCurveTo(177,195,198,206,221,216);
	c1ctx.bezierCurveTo(222,216,223,216,226,218);
	c1ctx.bezierCurveTo(229,219,231,220,233,221);
	c1ctx.bezierCurveTo(234,221,236,222,238,222);
	c1ctx.bezierCurveTo(240,223,242,223,244,223);
	c1ctx.bezierCurveTo(247,223,251,221,256,218);
	c1ctx.bezierCurveTo(261,214,265,210,270,206);
	c1ctx.bezierCurveTo(274,201,279,197,284,194);
	c1ctx.bezierCurveTo(289,190,294,188,297,188);
	c1ctx.bezierCurveTo(300,188,302,189,305,190);
	c1ctx.bezierCurveTo(307,191,310,192,314,194);
	c1ctx.bezierCurveTo(318,196,320,197,320,197);
	c1ctx.bezierCurveTo(325,199,329,201,334,203);
	c1ctx.bezierCurveTo(339,205,345,207,351,210);
	c1ctx.bezierCurveTo(357,212,362,214,365,216);
	c1ctx.bezierCurveTo(377,220,384,223,385,226);
	c1ctx.bezierCurveTo(386,227,386,228,386,230);
	c1ctx.bezierCurveTo(386,233,385,238,383,243);
	c1ctx.bezierCurveTo(381,249,380,253,378,257);
	c1ctx.bezierCurveTo(374,263,363,270,346,277);
	c1ctx.bezierCurveTo(329,284,313,287,297,287);
	c1ctx.bezierCurveTo(293,287,288,287,283,286);
	c1ctx.bezierCurveTo(279,286,274,285,268,284);
	c1ctx.bezierCurveTo(263,283,259,282,256,281);
	c1ctx.bezierCurveTo(253,280,249,279,242,277);
	c1ctx.bezierCurveTo(235,275,230,274,229,274);
	c1ctx.bezierCurveTo(212,269,196,264,183,258);
	c1ctx.bezierCurveTo(161,247,138,234,114,216);
	c1ctx.bezierCurveTo(90,199,71,182,58,165);
	c1ctx.bezierCurveTo(49,155,42,144,36,132);
	c1ctx.bezierCurveTo(35,130,34,127,31,122);
	c1ctx.bezierCurveTo(29,117,27,113,26,111);
	c1ctx.bezierCurveTo(25,109,24,106,22,102);
	c1ctx.bezierCurveTo(20,98,19,95,19,91);
	c1ctx.bezierCurveTo(18,88,18,85,18,81);
	c1ctx.fill();

	c2ctx.fillStyle="rgb(0,0,0)";
	c2ctx.beginPath();
	c2ctx.moveTo(385,256);
	c2ctx.bezierCurveTo(385,273,370,287,352,287);
	c2ctx.lineTo(48,287);
	c2ctx.bezierCurveTo(29,287,15,273,15,256);
	c2ctx.lineTo(15,41);
	c2ctx.bezierCurveTo(15,23,29,9,48,9);
	c2ctx.lineTo(352,9);
	c2ctx.bezierCurveTo(370,9,385,23,385,41);
	c2ctx.lineTo(385,256);
	c2ctx.fill();
	
	c2ctx.fillStyle="rgb(253,254,254)";
	c2ctx.beginPath();
	c2ctx.moveTo(352,34);
	c2ctx.lineTo(48,34);
	c2ctx.bezierCurveTo(44,34,41,37,41,41);
	c2ctx.bezierCurveTo(41,63,53,83,71,97);
	c2ctx.bezierCurveTo(99,118,127,139,154,160);
	c2ctx.bezierCurveTo(165,168,185,186,199,186);
	c2ctx.lineTo(200,186);
	c2ctx.lineTo(200,186);
	c2ctx.bezierCurveTo(214,186,234,168,245,160);
	c2ctx.bezierCurveTo(273,139,300,118,328,97);
	c2ctx.bezierCurveTo(341,87,358,65,358,48);
	c2ctx.bezierCurveTo(358,43,360,34,352,34);
	c2ctx.fill();
	
	c2ctx.fillStyle="rgb(255,255,255)";
	c2ctx.beginPath();
	c2ctx.moveTo(358,104);
	c2ctx.bezierCurveTo(354,109,349,113,344,117);
	c2ctx.bezierCurveTo(315,139,285,161,256,184);
	c2ctx.bezierCurveTo(241,196,221,212,200,212);
	c2ctx.lineTo(200,212);
	c2ctx.lineTo(199,212);
	c2ctx.bezierCurveTo(178,212,159,196,143,184);
	c2ctx.bezierCurveTo(115,161,85,139,55,117);
	c2ctx.bezierCurveTo(50,113,45,109,41,104);
	c2ctx.lineTo(41,256);
	c2ctx.bezierCurveTo(41,259,44,262,48,262);
	c2ctx.lineTo(352,262);
	c2ctx.bezierCurveTo(355,262,358,259,358,256);
	c2ctx.lineTo(358,104);
	c2ctx.fill();

	}else {
		$('#canvas1').html('<p>Your browser does not support the HTML5 Canvas tag.</p><p><a href="mailto:bayouautism@yahoo.com">Click here</a> to send an email to bayouautism.org</p>');			
	}

if(Modernizr.video){
	console.log('Video is supported');
			
	}else {
		$('#vids').html("<p>Video is not supported</p><p><a href='http://bayouautism.org/dev/video/autism.mp4'>CLICK HERE TO DOWNLOAD</a></p>");
	
	}


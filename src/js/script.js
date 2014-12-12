$(document).ready(function(){

	// A voir si on enlève avec le script jquery.superscrollorama.js pour fonctionement
	var controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});

	var draw = document.getElementById("draw");
	var ctx = draw.getContext("2d");

	// Create timeline
	var tl = new TimelineLite({paused: true});
	var tl2 = new TimelineLite({paused: true});
	var tl3 = new TimelineLite({paused: true});

	// Loading animation
	// $('#world').delay(3000).fadeOut();

	// Timeline animations
	// from("selecteur Jquery", temps d'execution, {propriétés css à modifier}, temps avant d'executer la function )
	tl
	.to('.start', 0.2, {autoAlpha: 0}, 0.1)
	.from(".b1", 0.2, {scale: 0.5, top: "250px", autoAlpha: 0}, 1)
	.from(".b2", 0.3, {scale: 0.7, top: "250px", autoAlpha: 0}, "feature+=0.25")
	.from(".b3", 0.3, {scale: 0.7, top: "250px", autoAlpha: 0}, "feature+=0.25")
	.from(".b4", 0.3, {scale: 0.7, top: "250px", autoAlpha: 0}, "feature+=0.25")
	.staggerFrom(".gesture1", 0.3, {autoAlpha: 0, onComplete:function(){

		$('.gesture1').on('click', function(){
				tl2.play();
		})

	}}, 0);

	tl2
	.to(".b1", 0.1, {scale: 0.5, top: "-250px", autoAlpha: 0}, 0)
	.to(".b2", 0.1, {scale: 0.7, top: "250px", autoAlpha: 0}, 0.2)
	.to(".b3", 0.1, {scale: 0.7, top: "250px", autoAlpha: 0}, 0.2)
	.to(".b4", 0.1, {scale: 0.7, top: "250px", autoAlpha: 0}, 0.2)
	.staggerTo(".gesture1", 0.3, {autoAlpha: 0, onComplete: function(){

		tl3.play();

	}}, 0);

	tl3
	.to(".ball", 1.6, {scale: 2, width: "50px", height: "50px",  ease:Power1.easeInOut}, 0)
	.to(".ball", 1.6, {marginLeft: "500px", marginTop: "100px", ease:Power1.easeOut}, "feature-=1.5")
	.to(".ball", 1.4, {scale: 6.4, marginLeft: "-100px", marginTop: "150px", ease:Power1.easeInOut}, "feature-=0.5")
	.from(".txt", 0.4, {rotation: 60, transformOrigin:"-100px 50%", autoAlpha: 0, ease:Power1.easeOut}, "feature+=0.5")

	// Play first tieline on start push button
	$('.start').on('click', function(){
		tl3.play();
	})

	$('#elem').wScratchPad({
		size        : 50,          // The size of the brush/scratch.
		bg          : '#cacaca',  // Background (image path or hex color).
		fg          : '#6699ff',  // Foreground (image path or hex color).
		realtime    : true,       // Calculates percentage in realitime.
		scratchDown: function(e, percent){ scratchAvancement(percent); },
		scratchMove: function(e, percent){ scratchAvancement(percent); },
		scratchUp: function(e, percent){ scratchAvancement(percent); }     // Set scratcMove callback.
	});

	// var sp = $("#elem").wScratchPad();
	// sp.wScratchPad('bg', 'src/images/image.png');

	function scratchAvancement(percent){
		if(percent >= 70){
			console.log('ok');
			$('#elem').wScratchPad('clear');
		}
		console.log(percent);
	}




	// Get mouse posotion x y
	$('body').on('mousemove', function(e){
		ctx.beginPath();
		ctx.arc(e.pageX,e.pageY,5,0,2*Math.PI);
		ctx.fill();
		console.log("x: " + e.pageX, "y: " + e.pageY);
	});


	// $('body').on("mousewheel", function() {

	// 	var pos = $(document).scrollTop();
 //        console.log(pos);
 //        if(pos>300 || pos > oldPos){
 //        	a.resume();

 //        }
 //        var oldPos = pos;
 //    });

});


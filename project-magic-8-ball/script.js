$(document).ready(function() {
/*  Eight Ball Object */
var eightBall = {};
eightBall.answerList = [ "Better not tell you now", "My sources say no", "Get an unbrella", "I see the cats comming out", "Do a back flip", "Drink some tea" ];

eightBall.imgQuestion = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png";
eightBall.imgAnswer = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";

eightBall.getAnswer = function(question)
{
	var randomDec = Math.random() * this.answerList.length;
	var randomInt = Math.floor(randomDec);
	var answer = this.answerList[randomInt];
	
	$("#8ball").attr("src",eightBall.imgAnswer);
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
	
	$("#answer").fadeIn(4000);
};
	
var askQuestion = function() {
	$("#answer").hide();
	$("#8ball").attr("src",eightBall.imgQuestion);
	
	setTimeout(questionPrompt, 250);
	
};

var questionPrompt = function() {
	var question = prompt("What is on your mind?");
	$("#8ball").effect("shake");
	eightBall.getAnswer(question)
};

/* Run Time Script */	
$("#answer").hide();
$("#questionButton").click(askQuestion);
	


});
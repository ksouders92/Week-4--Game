// 4 Crystals with a random value and a random result
// Every crystal needs to have a random number value between 1-12
// When clicking any crystal it will add the value to the previous result until it equals the total score
// If it is greater than the random result we start over (reset) and increment the loss counter
// If it is equal then we increment a win counter

// Global Variables
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;



var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'./Assets/Images/blue-crystal.png', 
			'./Assets/Images/pink-crystal.png', 
			'./Assets/Images/purple-crystal.png', 
            './Assets/Images/orange-crystal.png'];
            
// A new random number (randomResult) should be generated every time we win or lose
// The number is between 19-120            
		
	randomResult = Math.floor(Math.random() * 101 ) + 19; 

// Sending the random result to the HTML to let the player know what number of crystals to collect 

	$("#result").html('Number to collect: ' + randomResult);


// For loop to generate 4 different random numbers to assign to each crystal
	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
            });
            
// A string that generates the objects in the var images as background images to represent each crystal           
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

    }
    
// The value of the previous number clicked will be added to the total score and printed in the html
	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


// Turn each crystal into a button
$(document).on('click', ".crystal", function () {

// When clicked each gems number (string) will generate as a random integer
	var num = parseInt($(this).attr('data-random'));

// Add new number to previous score
	previous += num;


	$("#previous").html("Total score: " + previous);

    
    // If the total score is greater than the random result the player loses
    // Number of losses are printed to html
    // Previous is set to 0 and the game is reset 

	if(previous > randomResult){

		losses++;

		$("#losses").html("You lost: " + losses);

		previous = 0;

		resetAndStart();

    } 
    
    // If previous equals the random result the player wins!
    // Number of losses are printed to html
    // Previous is set to 0 and the game is reset 

	else if(previous === randomResult){

		wins++;

		$("#wins").html("You win: " + wins);

		previous = 0;

		resetAndStart();

	}

});



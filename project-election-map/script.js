/*   declarations   */

// candidate object
var startCandidate = function(name, partyColor, partyColorHex) {
  
  var candidate = {};
  candidate.name = name;
  candidate.partyColor = partyColor;
  candidate.partyColorHex = partyColorHex;
  candidate.votes = null;
  candidate.totalVotes = 0;
  
  candidate.announceTotalVotes = function() {
    console.log(this.name + " has " + this.totalVotes + " total votes!");
  };
  
  candidate.tallyVotes = function() {
    this.totalVotes = 0;
	
    for (var i = 0; i < this.votes.length; i++)
    {
      this.totalVotes = this.totalVotes + this.votes[i];
    }
  };
  
  return candidate;
};


// runs on mouse over events of each state, called by map.js library
var setStateResults = function(state) {
	theStates[state].winner = null;
	
	// find winner for selected state and save
	if (candidate1.votes[state] > candidate2.votes[state]) 
		theStates[state].winner = candidate1;
	else if (candidate1.votes[state] < candidate2.votes[state])
		theStates[state].winner = candidate2;
	
	
	var stateWinner = theStates[state].winner;

	// set the state color
	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	}
	else {
		//theStates[state].rgbColor = [11, 32, 57];
		theStates[state].rgbColor = [86, 141, 153];
	}

	
	/*     Update State table      */
	// table cells 
	var stateTable = document.getElementById("stateResults");
	var stateName = stateResults.children[0].children[0].children[0];
	var stateAbbrev = stateResults.children[0].children[0].children[1];
	
	var name1 = stateResults.children[1].children[0].children[0];
	var results1 = stateResults.children[1].children[0].children[1];
	
	var name2 = stateResults.children[1].children[1].children[0];
	var results2 = stateResults.children[1].children[1].children[1];
	
	var winnerNameCell = stateResults.children[1].children[2].children[1];
	var winnerTitleCell = stateResults.children[1].children[2].children[0];
	
	// update table values
	stateName.innerText = theStates[state].nameFull;
	stateAbbrev.innerText = theStates[state].nameAbbrev;
	name1.innerText = candidate1.name;
	results1.innerText = candidate1.votes[state];
	
	name2.innerText = candidate2.name;
	results2.innerText = candidate2.votes[state];
	
	// update state winner row
	if (theStates[state].winner !== null) {
		winnerNameCell.innerText = stateWinner.name;
		winnerNameCell.style.backgroundColor = stateWinner.partyColorHex;
		winnerTitleCell.style.backgroundColor = stateWinner.partyColorHex;
	}
	else {
		winnerNameCell.innerText = "DRAW";
		winnerNameCell.style.backgroundColor = "#568D99";
		winnerTitleCell.style.backgroundColor = "#568D99";
	}
	
};


/*   tally all votes and update the top banner with the counts and the winner  */
var declareWinner = function() {
	/*    Declare Winner    */
	var winner = "not decided";
	candidate1.tallyVotes();
	candidate2.tallyVotes();

	if (candidate1.totalVotes == candidate2.totalVotes)
		winner = "Tied";
	else if (candidate1.totalVotes > candidate2.totalVotes)
		winner = candidate1;
	else
		winner = candidate2; 


	//console.log("And the winner is... " + winner.name + "!");


	// Update winner table
	var countryTable = document.getElementById("countryResults");
	
	var name1Cell = countryTable.children[0].children[0].children[0];
	var totalVotes1Cell = countryTable.children[0].children[0].children[1];
	
	var name2Cell = countryTable.children[0].children[0].children[2];
	var totalVotes2Cell = countryTable.children[0].children[0].children[3];
	
	var winnerCell = countryTable.children[0].children[0].children[5];
	var winnerTitleCell = countryTable.children[0].children[0].children[4];
	
	name1Cell.innerText = candidate1.name;
	totalVotes1Cell.innerText = candidate1.totalVotes;
	name2Cell.innerText = candidate2.name;
	totalVotes2Cell.innerText = candidate2.totalVotes;
	winnerCell.innerText = winner.name;
	
	// change winner background color to winner party colors
	winnerCell.style.backgroundColor = winner.partyColorHex;
	winnerTitleCell.style.backgroundColor = winner.partyColorHex;
	
};


////////////////////////////////////////////
// run time code
////////////////////////////////////////////

// initialize candidate objects
var candidate1 = startCandidate("Oprah Winfrey", [132,17,11], "#84110B");	// [132, 17, 11] #84110B    //[200, 86, 238] #c856ee
var candidate2 = startCandidate("Ginni Rometty", [245, 141, 136], "#F58D88");	// [0, 255, 194] #00FFC2

candidate1.votes = [   5,1,7,2,33,6, 4,2,1,14,8, 3,1,11,11,0, 5,3,3,3,7, 4,8,9,3,7, 2,2,4,2,8, 3,15,15,2,12, 0,4,13,1,3, 2,8,21,3,2, 11,1,3,7,2];
candidate2.votes = [4,2,4,4,22, 3,3,1,2,15, 8,1,3,9,0,  6,1,5,5,1, 3,7,8,1,3,  3,1,3,2,2, 6, 2,14,0,1,6,   7,3,7,3,6,  1,3,17,3,1, 2,11,2,3,1];


// correct votes
candidate1.votes[9] = 1;
candidate2.votes[9] = 28;

candidate1.votes[4] = 17;
candidate2.votes[4] = 38;

candidate1.votes[43] = 11;
candidate2.votes[43] = 27;

// verify changes
//console.log("Florida " + candidate1.votes[9] + " to " + candidate2.votes[9]);
//console.log("California " + candidate1.votes[4] + " to " + candidate2.votes[4]);
//console.log("Texas " + candidate1.votes[43] + " to " + candidate2.votes[43]);

//console.log("candadate1 colors: " + candadate1.partyColor);
//console.log("candadate2 colors: " + candadate2.partyColor);



// tally votes and update top banner
declareWinner();
	

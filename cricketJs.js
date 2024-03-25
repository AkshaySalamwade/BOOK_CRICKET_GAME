let totalScore = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let playerWickets = 0;

let playerWin = function () {
  if (totalScorePlayer1 > totalScorePlayer2) {
    console.log(`Player 1 Wins !!`);
    document.getElementById('circleContainer').textContent = 'Player 1 Wins !!';
    console.log(`Click on 'New Match' Button to start the New Match..`);
  } else if (totalScorePlayer1 == totalScorePlayer2) {
    console.log(`Match is Tied !!`);
    document.getElementById('circleContainer').textContent = 'Match is Tied !!';
  } else {
    console.log(`Player 2 Wins !!`);
    document.getElementById('circleContainer').textContent = 'Player 2 Wins!!';
    console.log(`Click on 'New Match' Button to start the New Match..`);
  }
};

document.querySelector("#playBtn1").addEventListener("click", function () {

  //alert("function Called");
  let bookSize = document.querySelector("#bookSize").value;
  let totalWickets = document.querySelector("#totalWickets").value;
  let calPlayerScore = function () {
    let pageNumber = Math.floor(Math.random() * bookSize) + 1;
    let playerScore = pageNumber % 10;
    return playerScore;
  };
  let currentPlayerScore = calPlayerScore();
  let playerTurn1 = function () {
    if (currentPlayerScore === 0) {
      playerWickets++;
      if (playerWickets < totalWickets) {debugger;
        console.log(`Out !! ${playerWickets} wickets down !! `);
        document.getElementById('circleContainer').textContent = 'OUT';

        console.log(`------------------------------------------------`);
      } else {
        totalScorePlayer1 = totalScore;
        console.log(
          `You are all Out & Total Runs scored : ${totalScorePlayer1}`   
        );
        document.getElementById('circleContainer').textContent = 'ALL OUT';
        console.log(`------------------------------------------------`);
        totalScore = 0;
        playerWickets = 0;
        document.querySelector("#playBtn1").disabled = true;
      }
    } else {debugger;
      totalScore += currentPlayerScore;
      console.log(`Page Flipped  > ${currentPlayerScore} runs !`);
    
     // document.getElementById('CurrentRun').innerHTML = currentPlayerScore;
      document.getElementById('circleContainer').textContent = currentPlayerScore;
      console.log(`Total Runs > ${totalScore} runs`);
      document.getElementById('totalScore1').innerHTML = totalScore;
      console.log(`------------------------------------------------`);
    }

  };
  playerTurn1();
});

document.querySelector("#playBtn2").addEventListener("click", function () {
  let bookSize = document.querySelector("#bookSize").value;
  let totalWickets = document.querySelector("#totalWickets").value;
  let calPlayerScore = function () {
    let pageNumber = Math.floor(Math.random() * bookSize) + 1;
    let playerScore = pageNumber % 10;
    return playerScore;
  };
  let currentPlayerScore = calPlayerScore();
  let playerTurn2 = function () {
    if (currentPlayerScore === 0) {
      playerWickets++;
      if (playerWickets < totalWickets) {
        console.log(`Out !! ${playerWickets} wickets down !! `);
        document.getElementById('circleContainer').textContent = 'OUT';
        console.log(`------------------------------------------------`);
      } else {
        totalScorePlayer2 = totalScore;
        console.log(
          `You are all Out & Total Runs scored : ${totalScorePlayer2}`
        );
        document.getElementById('circleContainer').textContent = 'ALL OUT';
        console.log(`------------------------------------------------`);
        totalScore = 0;
        playerWickets = 0;
        document.querySelector("#playBtn2").disabled = true;
        playerWin();
      }
    } else {
      if (totalScore > totalScorePlayer1) {
        totalScorePlayer2 = totalScore;
        playerWin();
      } else {
        totalScore += currentPlayerScore;
        console.log(`Page Flipped  > ${currentPlayerScore} runs !`);
        document.getElementById('circleContainer').textContent = currentPlayerScore;   
        document.getElementById('totalScore2').innerHTML = totalScore;
        console.log(`Total Runs > ${totalScore} runs`);
        console.log(`------------------------------------------------`);
      }
    }
  };
  playerTurn2();
  ``;
});

document.querySelector("#newMatchBtn").addEventListener("click", function () {
  console.clear();
  console.log(`New Match is Ready to Begin !! `);
  document.querySelector("#playBtn1").disabled = false;
  document.querySelector("#playBtn2").disabled = false;
  totalScore = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  playerWickets = 0;
});

let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if ( attempt.value !== '' || answer.value !== '') {
    setHiddenFields();
    }
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt++
    }
    if(getResults() == true) {
        setMessage('You Win!');
        showAnswer(true);
    } else if(attempt >= 10) {
        setMessage("You Lose! :()");
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");
    }

};

//implement new functions here

function setHiddenFields (answer) {
    var answer = Math.floor(Math.random()*10000);
    answer.toString();
    while (answer.value.length < 4) {
        answer = "0" + answer;
    } ;
    attempt = 0;
};

function setMessage (message) {
    document.getElementById('message').innerHTML = message;
};

function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false
    }
};

function getResults(input) {
    html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (var i = 0; i <= input.length; i++) {
        if (input.charAt(i) == answer.value.charAt(i)) { 
            html += '<span class="glyphicon glyphicon-ok"></span>';
            //needed help with this one
        } else if (answer.value.indexOf(input.charAt(i)) > -1 ) {
            html += '<span class="glyphicon glyphicon-transfer">';
        } else {
           html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>'
    document.getElementById('results').innerHTML += html;

    if(input == answer.value) {
        return true;
    }

     return false;
    }

function showAnswer (input) {
    document.getElementById("code").innerHTML = answer.value;
    if (input == true) {
        document.getElementById('code').className += " sucess";
    } else {
        document.getElementById('code').className += " failure";
    }
}

function showReplay () {
    document.getElementById("guessing-div").style.display = none;
    document.getElementById('replay-div').style.display = block;
}


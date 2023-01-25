document.getElementById('High-score').addEventListener("click", function(){
    var element= document.querySelector('.Start-container');
    element.style.display= 'none';
    var HSDisplaypage = document.querySelector('.High-score-display');
    HSDisplaypage.style.display = 'block';
});

document.getElementById('Start-button').addEventListener("click", function timer () {
    var element= document.querySelector('.Start-container');
    element.style.display= 'none';
    var newDisplay = document.querySelector('.question');
    newDisplay.style.display = 'block';

    var timeElapsed = document.querySelector('.Timer');

    var secondsleft = 60;

    function setTime() {
        var timerInterval = setInterval( function () {
            secondsleft--;
            timeElapsed.textContent = secondsleft;

            if(secondsleft === 0) {
                clearInterval(timerInterval);
                var HSdisplay = document.querySelector('.Enter-High-score-container');
                HSdisplay.style.display = 'block';
            }

            var Question = document.getElementById('Question-Array');
            var Choice1 = document.getElementById('multiple-choice1');
            var Choice2 = document.getElementById('multiple-choice2');
            var Choice3 = document.getElementById('multiple-choice3');
            var Choice4 = document.getElementById('multiple-choice4');
            var IsClicked = document.getElementById('Submit-initials');
            var initials = document.getElementById('Initials');

            function Question1() {
                Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "Which loop iterates as long as the conditon is true?");
            }
            function Question2() {
                clearInterval(timerInterval);
                newDisplay.style.display = 'none';
                var HSdisplay = document.querySelector('.Enter-High-score-container');
                HSdisplay.style.display = 'block';
        
            }
            function Question3() {
                Question.innerHTML = Question.innerHTML.replace("What is a name of storage location?", "What is a sequence of Characters called?");
        
            }
            function Question4() {
                Question.innerHTML = Question.innerHTML.replace("Which loop iterates as long as the conditon is true?", "What is a name of storage location?");
            }
            function SubmitInitials() {

                function getInit() {
                    return localStorage.getItem("Submit-initials");
                  }
                  
                  function updateHTML() {
                    var InitialsDis = getInit();
                    document.getElementById("Stored-Initials").innerHTML = InitialsDis;
                  }
                  
                  function myFunction() {
                    var InitialsDis = document.getElementById("Submit-initials").value;
                    localStorage.setItem("Submit-initials", InitialsDis);
                
                    updateHTML();
                  }

                var HSdisplay = document.querySelector('.Enter-High-score-container');
                HSdisplay.style.display = 'none';
                var HSDisplaypage = document.querySelector('.High-score-display');
                HSDisplaypage.style.display = 'block';
                
            }
        
            Choice1.addEventListener("click", Question1);
            Choice2.addEventListener("click", Question2);
            Choice3.addEventListener("click", Question3);
            Choice4.addEventListener("click", Question4);
            IsClicked.addEventListener("click", SubmitInitials);
        
        }, 1000);
    }

    setTime();
});
    
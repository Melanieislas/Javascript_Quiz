//var startQuiz = document.querySelector("Start-button");

document.getElementById('Start-button').addEventListener("click", function () {
    var element= document.querySelector('.Start-container');
    element.style.display= 'none';
    var newDisplay = document.querySelector('.question');
    newDisplay.style.display = 'block';
    
    //var QuestionArray = document.getElementById('.Question-Array');
    var Question = document.getElementById('Question-Array');
    var Correct = document.getElementById('Correct');
    var Choice1 = document.getElementById('multiple-choice1');
    var Choice2 = document.getElementById('multiple-choice2');
    var Choice3 = document.getElementById('multiple-choice3');
    var Choice4 = document.getElementById('multiple-choice4');

    //var score =0;

    function Question1() {
        //if(Question = "What funtion returns a true or false?") {
                //score = 10;
            //Correct.innerHTML = Correct.innerHTML.replace("Correct!", "Wrong");
        Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "Which loop iterates as long as the conditon is true?");
                //alert("JLKDS");
            
            //else {
                //Correct.innerHTML = Correct.innerHTML.replace("Correct!", "Wrong");
            //}
            //Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "4444");
        //}

        //Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "4444");
        /*if(Choice.innerHTML = "boolean") {
            alert("help");
        }
        else if (Choice.innerHTML == "2. string") {
            alert("heeeeee");
        }*/
    }
    function Question2() {
        newDisplay.style.display = 'none';
        var display = document.querySelector('.Enter-High-score-container');
        display.style.display = 'block';
    }
    function Question3() {
        Question.innerHTML = Question.innerHTML.replace("What is a name of storage location?", "What is a sequence of Characters called?");

    }
    function Question4() {
        Question.innerHTML = Question.innerHTML.replace("Which loop iterates as long as the conditon is true?", "What is a name of storage location?");
    }
    Choice1.addEventListener("click", Question1);
    Choice2.addEventListener("click", Question2);
    Choice3.addEventListener("click", Question3);
    Choice4.addEventListener("click", Question4);

    //newDisplay.style.display = 'none';
    /*var Choice2 = document.getElementById('multiple-choice2');
    var Choice3 = document.getElementById('multiple-choice3');
    var Choice4 = document.getElementById('multiple-choice4');*/

/*
    function Question1() {
        //alert("HW");
        //Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "4444");
        if (choice1.innerHTML == "boolean") {
            alert("EEE");
            //IsCorrect.innerHTML = IsCorrect.innerHTML.replace("Correct!", "Wrong");
        }
        else {
            Correct.innerHTML = Correct.innerHTML.replace("Correct!", "Wrong");
        }
        Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "4444");
    };
     
    Choice1.addEventListener("click", Question1);
    Choice2.addEventListener("click", Question1);
    Choice3.addEventListener("click", Question1);
    Choice4.addEventListener("click", Question1);

*/


    //var clicked1 =0;

    /*var clicked1 = false;
    Choice1.addEventListener("click", function () {
        clicked1 = true;
    });

    Choice1.onclick = function () {
        var clicked1 = true;
    };

    Choice2.onclick = function () {
        var clicked2 = true;
    };

    Choice3.onclick = function () {
        var clicked3 = true;
    };

    Choice4.onclick = function () {
        var clicked4 = true;
    };

    if (clicked1 = true) {
        alert("HEY");
        //Question.innerHTML = Question.innerHTML.replace("What funtion returns a true or false?", "4444");
    }*/

    
    /*document.getElementById('multiple-choices').addEventListener("click", function () {
        alert("alert");
    });*/
    //includes('1.')) {
       // alert('hey');
    //}

});

//var Questions = ['What is Java2', 'What is Java3', 'What is4'];